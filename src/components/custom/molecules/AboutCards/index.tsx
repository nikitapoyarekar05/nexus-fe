import { AboutProps } from "@/global/utilities/interface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutCards = (props: AboutProps) => {
  const { title, body, renderRichText } = props;
  return (
    <section>
      <Card className="bg-background shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>{renderRichText(body)}</CardContent>
      </Card>
    </section>
  );
};

export default AboutCards;
