import type { CartItem } from "@/types/dessert";
import { Dialog, DialogContent } from "./ui/dialog";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { getImageUrl } from "@/lib/imageUtils";

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onStartNewOrder: () => void;
}

export const OrderConfirmation = ({
  isOpen,
  onClose,
  items,
  onStartNewOrder,
}: OrderConfirmationProps) => {
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto p-8 bg-white rounded-xl">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-dessert-green rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Order Confirmed
          </h2>
          <p className="text-muted-foreground">We hope you enjoy your food!</p>
        </div>

        <div className="space-y-4 mb-6">
          {items.map((item) => {
            // Use the same approach as Cart component
            const imageUrl = getImageUrl(item.image.desktop);

            return (
              <div key={item.name} className="flex items-center gap-3 py-2">
                <img
                  src={imageUrl}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg object-cover"
                  onError={() => {
                    console.error(
                      "OrderConfirmation - Failed to load image for:",
                      item.name,
                      "Path:",
                      imageUrl,
                    );
                  }}
                  onLoad={() => {
                    console.log(
                      "OrderConfirmation - Successfully loaded image for:",
                      item.name,
                      "Path:",
                      imageUrl,
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
                  </div>
                </div>
                <span className="font-semibold text-sm text-foreground">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
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
          onClick={onStartNewOrder}
          className="w-full bg-dessert-orange hover:bg-dessert-orange-hover text-white py-3 rounded-full font-medium transition-colors duration-300"
        >
          Start New Order
        </Button>
      </DialogContent>
    </Dialog>
  );
};
