import { useState, useMemo } from "react";
import { ArrowIcon, BoxIcon } from "../components/assets/icons";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import CustomInput from "../components/shared/CustomInput";
import CalculateHeader from "../components/widget/CalculateHeader";

const WAREHOUSES = [
  { name: "Эрээн агуулах", id: 1 },
  { name: "Хэбэй муж Шижуяан хотын агуулах", id: 2 },
  { name: "Гуанжу агуулах", id: 3 },
] as const;

interface BoxDimensions {
  width: number;
  height: number;
  length: number;
  weight: number;
}

const WEIGHT_PRICE = 3000; // MNT per kg
const BELOW_1M3 = 599; // CNY per m³
const ABOVE_1M3 = 399; // CNY per m³

const Calculate = () => {
  const [dimensions, setDimensions] = useState<BoxDimensions>({
    weight: 0,
    height: 0,
    length: 0,
    width: 0,
  });

  const [selectedWarehouse, setSelectedWarehouse] = useState(WAREHOUSES[0]);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof BoxDimensions, value: string) => {
    if (!/^\d*\.?\d*$/.test(value)) {
      setFormErrors((prev) => ({ ...prev, [field]: "Зөвхөн тоо оруулна уу." }));
      return;
    }

    setDimensions((prev) => ({
      ...prev,
      [field]: value === "" ? 0 : Number(value),
    }));

    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  // Оворын жин тооцоолол
  const volumetricWeight = useMemo(() => {
    if (
      dimensions.width === 0 ||
      dimensions.height === 0 ||
      dimensions.length === 0
    )
      return 0;
    return (dimensions.width * dimensions.height * dimensions.length) / 6000;
  }, [dimensions.width, dimensions.height, dimensions.length]);

  // Үнийн тооцоолол
  const price = useMemo(() => {
    // Жин болон оворын жингийн аль нь ихээр тооцогдохыг тодорхойлох
    const effectiveWeight = Math.max(
      dimensions.weight > 0 ? dimensions.weight : 0,
      volumetricWeight
    );

    if (effectiveWeight === 0) return 0;

    // 1 м³-ээс дээш эсэхэд үндэслэн үнийг тодорхойлох
    const volume =
      (dimensions.width * dimensions.height * dimensions.length) / 1000000; // м³-р тооцоолох
    const isAbove1m3 = volume >= 1;

    return isAbove1m3
      ? effectiveWeight * ABOVE_1M3
      : effectiveWeight * BELOW_1M3;
  }, [
    dimensions.weight,
    volumetricWeight,
    dimensions.width,
    dimensions.height,
    dimensions.length,
  ]);

  // Мөнгөний формат
  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat("mn-MN").format(price);
  }, [price]);

  return (
    <div className="container xs:py-8 grid gap-8">
      {/* Агуулах сонгох хэсэг */}
      <div className="flex items-start justify-between">
        <h1 className="grid gap-1 leading-3">
          <span className="text-sm font-medium text-black">
            Сонгосогдсон агуулах
          </span>
          <span className="text-base leading-tight font-semibold text-primary">
            {selectedWarehouse.name}
          </span>
        </h1>
        <Listbox value={selectedWarehouse} onChange={setSelectedWarehouse}>
          <ListboxButton className="flex items-center gap-2 h-11 border border-light rounded-xl px-3 leading-0 outline outline-1 -outline-offset-1 outline-dark/20 placeholder:text-dark focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary">
            <span className="stroke-2 stroke-black group-hover/item:stroke-primary">
              <BoxIcon size="16" />
            </span>
            {selectedWarehouse.name}
            <div className="fill-white stroke-1 stroke-primary -rotate-90 pr-1">
              <ArrowIcon size="24" />
            </div>
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            className="bg-white border border-light rounded mt-3 shadow-lg"
          >
            {WAREHOUSES.map((warehouse) => (
              <ListboxOption
                key={warehouse.id}
                value={warehouse}
                className="flex items-center justify-start h-8 w-full hover:bg-primary/10 cursor-pointer px-3 py-2"
              >
                <p className="text-sm text-dark hover:text-primary transition-all font-medium">
                  {warehouse.name}
                </p>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>

      <CalculateHeader
        weightPrice={WEIGHT_PRICE}
        Below1m3={BELOW_1M3}
        Above1m3={ABOVE_1M3}
        calculatePrice={formattedPrice}
      />

      <div className="flex-col flex space-y-4">
        <h2 className="text-sm font-medium text-black">Ачаа овор хэмжээ</h2>
        <div className="grid grid-cols-4 gap-6">
          <CustomInput
            placeholder="өргөн"
            value={dimensions.width}
            onChange={(e) => handleChange("width", e)}
            error={formErrors.width}
            showText
            simpleText="cm"
          />
          <CustomInput
            placeholder="өндөр"
            value={dimensions.height}
            onChange={(e) => handleChange("height", e)}
            error={formErrors.height}
            showText
            simpleText="cm"
          />
          <CustomInput
            placeholder="урт"
            value={dimensions.length}
            onChange={(e) => handleChange("length", e)}
            error={formErrors.length}
            showText
            simpleText="cm"
          />
          <CustomInput
            placeholder="жин"
            value={dimensions.weight}
            onChange={(e) => handleChange("weight", e)}
            error={formErrors.weight}
            showText
            simpleText="kg"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculate;
