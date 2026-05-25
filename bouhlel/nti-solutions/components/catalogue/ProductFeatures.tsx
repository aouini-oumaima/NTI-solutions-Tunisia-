import {
  Wifi, Maximize2, Smartphone, HardDrive, Cable, Monitor,
  ShieldCheck, Eye, Settings, Sun, Shield, ZapOff, Wind,
  Crosshair, EyeOff, Palette, Thermometer, CloudFog, AlertTriangle,
  Moon, Network, Globe, Layers, HardDriveDownload, Minimize2,
  UserCheck, CreditCard, Zap, BarChart3, Clock, FileText, MapPin,
  Database, Car, Camera, TrendingUp, Activity, Smartphone as Phone,
  RadioTower, Bell, Flame, Cpu, DoorClosed, Fan, Square, Droplets,
  Gauge, CloudSnow, RotateCw, ZoomIn, Anchor, Warehouse, Home,
  Fuel, Fence, Plane, Trees, Building2, Factory, Hotel, Hospital,
  GraduationCap, ShoppingBag, Landmark, ArrowRight,
} from "lucide-react";
import type { Product } from "@/lib/products";

// Dynamic icon resolver
function getIcon(name: string) {
  const icons: Record<string, React.ElementType> = {
    Wifi, Maximize2, Smartphone, HardDrive, Cable, Monitor,
    ShieldCheck, Eye, Settings, Sun, Shield, ZapOff, Wind,
    Crosshair, EyeOff, Palette, Thermometer, CloudFog, AlertTriangle,
    Moon, Network, Globe, Layers, HardDriveDownload, Minimize2,
    UserCheck, CreditCard, Zap, BarChart3, Clock, FileText, MapPin,
    Database, Car, Camera, TrendingUp, Activity, Phone,
    RadioTower, Bell, Flame, Cpu, DoorClosed, Fan, Square, Droplets,
    Gauge, CloudSnow, RotateCw, ZoomIn, Anchor, Warehouse, Home,
    Fuel, Fence, Plane, Trees, Building2, Factory, Hotel, Hospital,
    GraduationCap, ShoppingBag, Landmark, ArrowRight,
  };
  return icons[name] ?? Shield;
}

interface ProductFeaturesProps {
  product: Product;
}

export function ProductFeatures({ product }: ProductFeaturesProps) {
  const colClass =
    product.features.length === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="bg-[#F2F5F8] section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Caractéristiques clés</span>
            </div>
            <h2 className="heading-md text-[#0C1F3D]">
              Ce qui distingue<br />
              <span className="gradient-text">ce produit.</span>
            </h2>
          </div>
          <p className="text-sm text-[#526272] max-w-xs leading-relaxed self-end md:text-right">
            Chaque fonctionnalité est pensée pour répondre aux exigences
            les plus strictes du terrain professionnel.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className={`grid ${colClass} gap-5`}>
          {product.features.map((feature) => {
            const Icon = getIcon(feature.icon);
            return (
              <div
                key={feature.title}
                className="group bg-white border border-[#DDE3EC] p-7 card-lift hover:border-t-[#D4820A] transition-all duration-300"
                style={{ borderTopWidth: "2px" }}
              >
                {/* Icon */}
                <div className="w-11 h-11 border border-[#DDE3EC] flex items-center justify-center mb-6 group-hover:bg-[#D4820A] group-hover:border-[#D4820A] transition-all duration-300">
                  <Icon
                    size={20}
                    className="text-[#D4820A] group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Title */}
                <h3
                  className="font-semibold text-[#0C1F3D] mb-3 text-base"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
                >
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-[#526272] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
