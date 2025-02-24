// components/RecipeCard.js
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Image from 'next/image';
import React from 'react';


export default function RecipeCard({ recipe }) {
  return (
    <Card className="w-full max-w-md shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="relative">
        {recipe.image ? (
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={500}
            height={300}
            className="rounded-t-md object-cover"
            style={{ width: '100%', height: 'auto' }}
          />
        ) : (
          <div className="placeholder-image">No Image Available</div>
        )}
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">{recipe.name}</CardTitle>
            <CardDescription className="text-sm text-gray-600 mt-2">
              {recipe.area} {' '}
              {recipe.category}
            </CardDescription>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
