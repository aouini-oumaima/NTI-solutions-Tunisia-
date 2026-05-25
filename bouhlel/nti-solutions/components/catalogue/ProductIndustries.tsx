import {
  Wifi, Maximize2, Smartphone, HardDrive, Cable, Monitor,
  ShieldCheck, Eye, Settings, Sun, Shield, ZapOff, Wind,
  Crosshair, EyeOff, Palette, Thermometer, CloudFog, AlertTriangle,
  Moon, Network, Globe, Layers, Minimize2,
  UserCheck, CreditCard, Zap, BarChart3, Clock, FileText, MapPin,
  Database, Car, Camera, TrendingUp, Activity,
  RadioTower, Bell, Flame, Cpu, DoorClosed, Fan, Square, Droplets,
  Gauge, CloudSnow, RotateCw, ZoomIn, Anchor, Warehouse, Home,
  Fuel, Fence, Plane, Trees, Building2, Factory, Hotel, Hospital,
  GraduationCap, ShoppingBag, Landmark,
} from "lucide-react";
import type { Product } from "@/lib/products";

function getIcon(name: string): React.ElementType {
  const icons: Record<string, React.ElementType> = {
    Wifi, Maximize2, Smartphone, HardDrive, Cable, Monitor,
    ShieldCheck, Eye, Settings, Sun, Shield, ZapOff, Wind,
    Crosshair, EyeOff, Palette, Thermometer, CloudFog, AlertTriangle,
    Moon, Network, Globe, Layers, Minimize2,
    UserCheck, CreditCard, Zap, BarChart3, Clock, FileText, MapPin,
    Database, Car, Camera, TrendingUp, Activity,
    RadioTower, Bell, Flame, Cpu, DoorClosed, Fan, Square, Droplets,
    Gauge, CloudSnow, RotateCw, ZoomIn, Anchor, Warehouse, Home,
    Fuel, Fence, Plane, Trees, Building2, Factory, Hotel, Hospital,
    GraduationCap, ShoppingBag, Landmark,
  };
  return icons[name] ?? Building2;
}

interface ProductIndustriesProps {
  product: Product;
}

export function ProductIndustries({ product }: ProductIndustriesProps) {
  return (
    <section className="bg-[#F2F5F8] section-padding overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Applications</span>
            </div>
            <h2 className="heading-md text-[#0C1F3D]">
              Secteurs d&apos;application.
            </h2>
          </div>
          <p className="text-sm text-[#526272] max-w-xs leading-relaxed self-end">
            Ce produit s&apos;adapte à une large variété de contextes professionnels
            à travers toute la Tunisie.
          </p>
        </div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {product.industries.map((industry) => {
            const Icon = getIcon(industry.icon);
            return (
              <div
                key={industry.name}
                className="group bg-white border border-[#DDE3EC] p-6 hover:border-[#D4820A] hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 border border-[#DDE3EC] flex items-center justify-center mb-4 group-hover:bg-[#D4820A] group-hover:border-[#D4820A] transition-all duration-300">
                  <Icon
                    size={20}
                    className="text-[#D4820A] group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <p
                  className="font-semibold text-[#0C1F3D] text-sm mb-1.5"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
                >
                  {industry.name}
                </p>
                <p className="text-xs text-[#526272] leading-snug">{industry.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-10 bg-[#0C1F3D] p-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-white/55 text-center md:text-left">
            Votre secteur a des exigences spécifiques ? NTI Solutions adapte chaque solution à votre contexte réglementaire et opérationnel.
          </p>
          <a href="/contact" className="btn-primary whitespace-nowrap text-sm flex-shrink-0">
            Parler à un expert
          </a>
        </div>
      </div>
    </section>
  );
}
