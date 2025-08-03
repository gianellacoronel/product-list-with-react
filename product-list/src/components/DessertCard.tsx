import type { Dessert } from "@/types/dessert";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";

interface DessertCardProps {
  dessert: Dessert;
  onAddToCart: (dessert: Dessert) => void;
  onUpdateQuantity: (dessert: Dessert, quantity: number) => void;
  currentQuantity: number;
  imageMap: Record<string, string>;
}

export const DessertCard = ({ 
  dessert, 
  onAddToCart, 
  onUpdateQuantity, 
  currentQuantity, 
  imageMap 
}: DessertCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const imageSrc = imageMap[dessert.name] || dessert.image.desktop;

  const handleAddToCart = () => {
    onAddToCart(dessert);
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 0) {
      onUpdateQuantity(dessert, newQuantity);
    }
  };

  return (
    <Card 
      className="group relative overflow-hidden border-0 bg-card shadow-sm hover:shadow-elegant transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={imageSrc}
          alt={dessert.name}
          className={`w-full h-48 sm:h-52 object-cover rounded-lg transition-all duration-300 ${
            currentQuantity > 0 ? 'ring-2 ring-dessert-orange' : ''
          } ${isHovered ? 'scale-105' : ''}`}
        />
        
        {currentQuantity === 0 ? (
          <Button
            onClick={handleAddToCart}
            variant="outline"
            className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white border-2 border-dessert-orange text-foreground hover:bg-dessert-orange hover:text-white transition-all duration-300 rounded-full px-6 py-2 shadow-lg"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        ) : (
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-dessert-orange text-white rounded-full px-4 py-2 shadow-lg flex items-center gap-3">
            <Button
              onClick={() => handleQuantityChange(-1)}
              variant="ghost"
              size="sm"
              className="h-6 w-6 rounded-full p-0 text-white hover:bg-white/20"
            >
              <Minus className="w-3 h-3" />
            </Button>
            <span className="font-semibold text-sm min-w-[2ch] text-center">{currentQuantity}</span>
            <Button
              onClick={() => handleQuantityChange(1)}
              variant="ghost"
              size="sm"
              className="h-6 w-6 rounded-full p-0 text-white hover:bg-white/20"
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
        )}
      </div>

      <div className="p-4 pt-8">
        <p className="text-sm text-muted-foreground mb-1">{dessert.category}</p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{dessert.name}</h3>
        <p className="text-lg font-bold text-dessert-orange">${dessert.price.toFixed(2)}</p>
      </div>
    </Card>
  );
};