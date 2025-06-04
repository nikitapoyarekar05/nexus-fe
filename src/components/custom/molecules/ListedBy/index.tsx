import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "../../atoms/Button";
import { getAvatarWithInitials } from "../../../../global/utilities/helpers";

interface ListedByProps {
  name: string;
  email: string;
  companyName: string;
}

const ListedBy = (props: ListedByProps) => {
  const { name, email, companyName } = props;
  const initials = getAvatarWithInitials(name);

  return (
    <div>
      <Card className="mb-6 py-0">
        <CardContent className="p-4 flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="" alt={name} />
            <AvatarFallback className="bg-primary text-white font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-muted-foreground">{companyName ?? ""}</p>
          </div>
          <div className="ml-auto flex gap-2">
            <a
              href={`mailto:${email}?subject=Inquiry about your prooperty. &body=Hi, I have a question about your property.`}
            >
              <Button
                id="ask-question"
                dataTestId="ask-question"
                variant="outline"
              >
                Ask a question
              </Button>
            </a>
            <Button id="more-info" dataTestId="more-info" variant="ghost">
              Get more info
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListedBy;
