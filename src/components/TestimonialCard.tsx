import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  comment: string;
  rating: number;
}

export const TestimonialCard = ({ name, comment, rating }: TestimonialCardProps) => {
  return (
    <Card className="border-border bg-card p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
      <div className="mb-4 flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="mb-4 text-muted-foreground italic leading-relaxed">&quot;{comment}&quot;</p>
      <p className="font-semibold text-foreground">— {name}</p>
    </Card>
  );
};
