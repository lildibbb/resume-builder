import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TemplateCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  rating: number;
  isPro?: boolean;
}

export function TemplateCard({
  id,
  title,
  image,
  category,
  rating,
  isPro = false,
}: TemplateCardProps) {
  return (
    <Card className="group overflow-hidden border-2 transition-all hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/10">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <Button size="sm" asChild>
                <Link href={`/cv_template/${id}`}>
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Link>
              </Button>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="fill-current h-4 w-4" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
        {isPro && (
          <Badge
            variant="secondary"
            className="bg-gradient-to-r from-blue-500 to-violet-500 text-white"
          >
            PRO
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}
