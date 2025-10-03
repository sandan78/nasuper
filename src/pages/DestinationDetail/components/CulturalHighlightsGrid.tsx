import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import type { Destination } from "@/data/destinations";

interface CulturalHighlightsGridProps {
  destination: Destination;
}

// Category icons mapping
const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    people: "👥",
    livelihood: "🏭",
    culture: "🎭",
    tradition: "🎪",
    lifestyle: "🏠",
    art: "🎨",
    festival: "🎊",
    temple: "🏛️",
    nature: "🌿",
    adventure: "🏔️",
    cultural: "🎭",
    beach: "🏖️",
    historical: "📜",
    shopping: "🛍️",
    food: "🍽️",
    default: "📍",
  };
  return icons[category] || icons.default;
};

// Category color themes
const getCategoryColors = (category: string) => {
  const colorMap: Record<string, string> = {
    people: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300",
    livelihood: "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300",
    culture: "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300",
    tradition: "bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300",
    lifestyle: "bg-pink-50 dark:bg-pink-950/30 border-pink-200 dark:border-pink-800 text-pink-700 dark:text-pink-300",
    art: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300",
    festival: "bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300",
    temple: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300",
    nature: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300",
    adventure: "bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300",
    cultural: "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300",
    beach: "bg-cyan-50 dark:bg-cyan-950/30 border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300",
    historical: "bg-stone-50 dark:bg-stone-950/30 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300",
    shopping: "bg-fuchsia-50 dark:bg-fuchsia-950/30 border-fuchsia-200 dark:border-fuchsia-800 text-fuchsia-700 dark:text-fuchsia-300",
    food: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300",
  };
  return colorMap[category] || "bg-gray-50 dark:bg-gray-950/30 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300";
};

// Normalize highlight data
const normalizeHighlight = (
  highlight: string | { name: string; description: string; category: string },
) => {
  if (typeof highlight === "string") {
    return {
      name: highlight,
      description: highlight,
      category: "culture",
    };
  }
  return highlight;
};

export const CulturalHighlightsGrid = ({ destination }: CulturalHighlightsGridProps) => {
  return (
    <Card className="overflow-hidden border shadow-sm">
      <CardContent className="p-0">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Cultural Highlights
              </h2>
              <p className="text-muted-foreground mt-0.5 text-sm">
                Discover the people, traditions, and way of life that make {destination.name} unique
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {destination.culturalHighlights.map((highlight, index) => {
              const normalized = normalizeHighlight(highlight);
              const categoryColors = getCategoryColors(normalized.category);
              const categoryIcon = getCategoryIcon(normalized.category);

              return (
                <div
                  key={index}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${categoryColors}`}
                  data-testid={`cultural-highlight-${index}`}
                >
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl" aria-label={normalized.category}>
                        {categoryIcon}
                      </span>
                      <Badge 
                        variant="secondary" 
                        className="text-xs font-medium capitalize opacity-75 group-hover:opacity-100 transition-opacity"
                      >
                        {normalized.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold leading-tight">
                      {normalized.name}
                    </h3>
                    <p className="text-base leading-relaxed opacity-90">
                      {normalized.description}
                    </p>
                  </div>

                  {/* Hover Effect Decoration */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-current opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
              );
            })}
          </div>

          {/* Bottom Decoration */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-center text-sm text-muted-foreground">
              Experience the rich cultural tapestry of {destination.name}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
