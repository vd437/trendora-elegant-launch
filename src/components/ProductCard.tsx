import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
}

export const ProductCard = ({ image, name, price, originalPrice }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-[var(--shadow-card)] transition-all duration-500">
      <div className="aspect-square overflow-hidden bg-rose-soft/30">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="mb-3 text-lg font-semibold text-foreground">{name}</h3>
        <div className="mb-4 flex items-center justify-center gap-2">
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
          )}
          <span className="text-xl font-bold text-primary">{price}</span>
        </div>
        <Button className="w-full bg-primary hover:bg-gold-dark text-primary-foreground shadow-[var(--shadow-luxury)] transition-all duration-300 hover:shadow-xl">
          اشتري الآن
        </Button>
      </div>
    </Card>
  );
};
