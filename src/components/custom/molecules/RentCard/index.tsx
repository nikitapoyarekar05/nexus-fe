import { Card, CardContent } from "@/components/ui/card";
import Button from "../../atoms/Button";
import { MouseEventHandler } from "react";

interface RentCardProps {
  rent: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

// ToDO: Refine this component later
const RentCard = (props: RentCardProps) => {
  const { rent, onClick } = props;

  return (
    <Card className="pt-2 pb-4">
      <CardContent className="p-4 py-0 space-y-4">
        <div>
          <p className="text-muted-foreground text-sm">Rent</p>
          <p className="text-xl font-bold text-primary">
            {`$ ${rent}`}
            <span className="text-sm text-muted-foreground">&nbsp;/month</span>
          </p>
        </div>
        <Button
          id="apply-now"
          dataTestId="apply-now"
          onClick={onClick}
          customClass="w-full"
        >
          Apply now
        </Button>
      </CardContent>
    </Card>
  );
};

export default RentCard;
