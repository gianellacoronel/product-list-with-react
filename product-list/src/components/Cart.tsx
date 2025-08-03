import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { CartItem } from "@/types/dessert";

import { X } from "lucide-react";

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (item: CartItem, quantity: number) => void;
  onConfirmOrder: () => void;
}

export const Cart = ({
  items,
  onUpdateQuantity,
  onConfirmOrder,
}: CartProps) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <Card className="bg-cart-bg p-6 h-fit">
        <h2 className="text-xl font-bold text-dessert-orange mb-6">
          Your Cart (0)
        </h2>
        <div className="text-center py-8">
          <div className="w-32 h-32 mx-auto mb-4 opacity-50">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="#D4A574" opacity="0.3" />
              <circle cx="85" cy="85" r="25" fill="#D4A574" opacity="0.5" />
              <circle cx="115" cy="115" r="20" fill="#D4A574" opacity="0.5" />
              <circle cx="130" cy="80" r="15" fill="#D4A574" opacity="0.5" />
            </svg>
          </div>
          <p className="text-muted-foreground">
            Your added items will appear here
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-cart-bg p-6 h-fit">
      <h2 className="text-xl font-bold text-dessert-orange mb-6">
        Your Cart ({totalItems})
      </h2>

      <div className="space-y-4 mb-6">
        {items.map((item) => {
          // Fix the path replacement to match the actual data paths
          const imageSrc = item.image.thumbnail.replace("../", "/src/");
          console.log(
            "Cart - Item:",
            item.name,
            "Original path:",
            item.image.thumbnail,
            "Modified path:",
            imageSrc,
          );

          return (
            <div
              key={item.name}
              className="flex items-center gap-3 py-3 border-b border-border last:border-b-0"
            >
              <img
                src={imageSrc}
                alt={item.name}
                className="w-12 h-12 rounded-lg object-cover"
                onError={() => {
                  console.error(
                    "Cart - Failed to load image for:",
                    item.name,
                    "Path:",
                    imageSrc,
                  );
                }}
                onLoad={() => {
                  console.log(
                    "Cart - Successfully loaded image for:",
                    item.name,
                    "Path:",
                    imageSrc,
                  );
                }}
              />
              <div className="flex-1">
                <h4 className="font-medium text-sm text-foreground">
                  {item.name}
                </h4>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-dessert-orange font-semibold text-sm">
                    {item.quantity}x
                  </span>
                  <span className="text-muted-foreground text-sm">
                    @ ${item.price.toFixed(2)}
                  </span>
                  <span className="font-semibold text-sm text-foreground">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              <Button
                onClick={() => onUpdateQuantity(item, 0)}
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          );
        })}
      </div>

      <div className="border-t border-border pt-4 mb-6">
        <div className="flex justify-between items-center text-lg font-bold">
          <span className="text-foreground">Order Total</span>
          <span className="text-foreground">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <Button
        onClick={onConfirmOrder}
        className="w-full bg-dessert-orange hover:bg-dessert-orange-hover text-white py-3 rounded-full font-medium transition-colors duration-300"
      >
        Confirm Order
      </Button>
    </Card>
  );
};
