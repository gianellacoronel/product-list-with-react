import { Cart } from "@/components/Cart";
import { DessertCard } from "@/components/DessertCard";
import { OrderConfirmation } from "@/components/OrdenConfirmation";
import type { CartItem, Dessert } from "@/types/dessert";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function Index() {
  const [desserts, setDesserts] = useState<Dessert[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  useEffect(() => {
    import('@/data/data.json').then((data) => {
      setDesserts(data.default);
    });
  }, []);

  const handleAddToCart = (dessert: Dessert) => {
    const existingItem = cartItems.find(item => item.name === dessert.name);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.name === dessert.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...dessert, quantity: 1 }]);
    }
    
    toast("Added to cart", {
      description: `${dessert.name} has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (dessert: Dessert, quantity: number) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter(item => item.name !== dessert.name));
      toast("Removed from cart", {
        description: `${dessert.name} has been removed from your cart.`,
      });
    } else {
      setCartItems(cartItems.map(item =>
        item.name === dessert.name
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const getItemQuantity = (dessert: Dessert): number => {
    const item = cartItems.find(item => item.name === dessert.name);
    return item ? item.quantity : 0;
  };

  const handleConfirmOrder = () => {
    setShowOrderConfirmation(true);
    toast("Order confirmed!", {
      description: "Your delicious desserts are on the way!",
    });
  };

  const handleStartNewOrder = () => {
    setCartItems([]);
    setShowOrderConfirmation(false);
    toast("New order started", {
      description: "Ready to select more desserts!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground mb-8">Desserts</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {desserts.map((dessert) => (
                <DessertCard
                  key={dessert.name}
                  dessert={dessert}
                  onAddToCart={handleAddToCart}
                  onUpdateQuantity={handleUpdateQuantity}
                  currentQuantity={getItemQuantity(dessert)}
                />
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:w-96">
            <Cart
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onConfirmOrder={handleConfirmOrder}
            />
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      <OrderConfirmation
        isOpen={showOrderConfirmation}
        onClose={() => setShowOrderConfirmation(false)}
        items={cartItems}
        onStartNewOrder={handleStartNewOrder}
      />
    </div>
  )
}
