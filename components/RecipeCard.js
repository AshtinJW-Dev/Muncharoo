// components/RecipeCard.js
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../src/components/ui/card";
import Image from 'next/image';

export default function RecipeCard({ recipe }) {
  return (
    <Card className="w-full max-w-md shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="relative">
        <Image
          src={recipe.image_url}
          alt={recipe.name}
          width={500}
          height={300}
          className="rounded-t-md object-cover"
          style={{ width: '100%', height: 'auto' }}
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold">{recipe.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600 mt-2">
          {recipe.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
