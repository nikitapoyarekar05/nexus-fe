"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// ToDo: Refactor this later
// import { ENDPOINTS } from "../../../global/endpoints";
import AboutHero from "../molecules/AboutHero";
import AboutCards from "../molecules/AboutCards";
import AboutReadyToBeginInfo from "../molecules/AboutReadyToBeginInfo";

type RichTextChild = {
  type: "text";
  text: string;
  bold?: boolean;
};

type RichTextBlock = {
  type: "paragraph" | "list";
  format?: "unordered" | "ordered";
  children: RichTextChild[] | ListItemType[];
};

type ListItemType = {
  type: "list-item";
  children: RichTextChild[];
};

type TeamMember = {
  id: number;
  name: string;
  title: string;
  bio: string;
};

type Region = {
  id: number;
  name: string;
  keyCities: RichTextBlock[];
};

type AboutPageData = {
  heroTitle: string;
  heroBody: RichTextBlock[];
  whoWeAreTitle: string;
  whoWeAreBody: RichTextBlock[];
  whatMakesUsBoutiqueTitle: string;
  whatMakesUsBoutiqueBody: RichTextBlock[];
  globalReachTitle: string;
  globalReachBody: RichTextBlock[];
  coreValuesTitle: string;
  coreValuesBody: RichTextBlock[];
  regionsTitle: string;
  regionsBody: RichTextBlock[];
  readyToBeginTitle: string;
  readyToBeginBody: RichTextBlock[];
  faqTitle: string;
  team: TeamMember[];
  region: Region[];
};

export const renderRichText = (blocks?: RichTextBlock[]) => {
  if (!blocks || !Array.isArray(blocks)) return null;

  return blocks.map((block, i) => {
    if (block?.type === "paragraph") {
      return (
        <p key={i} className="mb-4 leading-relaxed">
          {block.children.map((child, idx) => {
            if (child.type === "text") {
              return child.bold ? (
                <strong key={idx}>{child.text}</strong>
              ) : (
                <React.Fragment key={idx}>{child.text}</React.Fragment>
              );
            }
            return null;
          })}
        </p>
      );
    }
    if (block.type === "list" && block.format === "unordered") {
      return (
        <ul
          key={i}
          className="list-disc pl-6 mb-4 space-y-1 text-muted-foreground"
        >
          {block.children.map((listItem, idx) => {
            if (listItem.type === "list-item") {
              return (
                <li key={idx}>
                  {listItem.children.map((child, cidx) =>
                    child.bold ? (
                      <strong key={cidx}>{child.text}</strong>
                    ) : (
                      <React.Fragment key={cidx}>{child.text}</React.Fragment>
                    )
                  )}
                </li>
              );
            }
            return null;
          })}
        </ul>
      );
    }
    return null;
  });
};

export default function AboutUs() {
  const [data, setData] = useState<AboutPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAboutData() {
      try {
        // ToDo: Refactor this later
        const response = await fetch(
          // `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${ENDPOINTS.FETCH_ABOUT_YOU_CONTENTS}`
          "https://truthful-charity-e28207744b.strapiapp.com//api/about-page?populate=*"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json.data);
      } catch (err) {
        setError("Failed to load data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-muted-foreground">
        Loading About page...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-destructive">
        {error}
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-16">
      <AboutHero
        title={data.heroTitle}
        body={data.heroBody}
        renderRichText={renderRichText}
      />

      <AboutCards
        title={data.whoWeAreTitle}
        body={data.whoWeAreBody}
        renderRichText={renderRichText}
      />

      <AboutCards
        title={data.whatMakesUsBoutiqueTitle}
        body={data.whatMakesUsBoutiqueBody}
        renderRichText={renderRichText}
      />

      <AboutCards
        title={data.globalReachTitle}
        body={data.globalReachBody}
        renderRichText={renderRichText}
      />

      <AboutCards
        title={data.coreValuesTitle}
        body={data.coreValuesBody}
        renderRichText={renderRichText}
      />

      <section className="text-center max-w-3xl mx-auto">
        <AboutReadyToBeginInfo
          title={data.readyToBeginTitle}
          body={data.readyToBeginBody}
          renderRichText={renderRichText}
        />
        <Button variant="default" size="lg" className="mt-6">
          Contact Us
        </Button>
      </section>
    </main>
  );
}
