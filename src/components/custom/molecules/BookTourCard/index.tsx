import { Card, CardContent } from "@/components/ui/card";
import Button from "../../atoms/Button";
import { Input } from "@/components/ui/input";

// ToDo: Refine this component later
const BookTourCard = () => {
  return (
    <Card className="pb-4 py-0">
      <CardContent className="m-4 px-0 space-y-4">
        <h3 className="text-base font-semibold mb-2">Request a home tour</h3>
        <div className="flex gap-2">
          <Button
            id="in-person"
            dataTestId="in-person"
            variant="outline"
            customClass="w-1/2"
          >
            In Person
          </Button>
          <Button
            id="virtual"
            dataTestId="virtual"
            variant="secondary"
            customClass="w-1/2"
          >
            Virtual
          </Button>
        </div>
        <div>
          <Input type="date" className="w-full" />
        </div>
        <Button
          id="request-tour"
          dataTestId="request-tour"
          customClass="w-full"
        >
          Request a tour
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          It’s free, with no obligation — cancel anytime.
        </p>
      </CardContent>
    </Card>
  );
};

export default BookTourCard;
