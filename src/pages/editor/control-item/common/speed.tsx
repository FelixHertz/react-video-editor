import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";

const Speed = ({
  value,
  onChange
}: {
  value: number;
  onChange: (v: number) => void;
}) => {
  // Create local state to manage opacity
  const [localValue, setLocalValue] = useState(value);

  // Update local state when prop value changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className="flex flex-col gap-2 py-4">
      <Label className="font-sans text-muted-foreground text-xs font-semibold">
        Speed
      </Label>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 40px",
          gap: "4px"
        }}
      >
        <Slider
          id="opacity"
          value={[localValue]} // Use local state for slider value
          onValueChange={(e) => {
            setLocalValue(e[0]); // Update local state
          }}
          onValueCommit={() => {
            onChange(localValue); // Propagate value to parent when user commits change
          }}
          min={0}
          max={4}
          step={0.1}
          aria-label="Opacity"
        />
        <Input
          max={100}
          variant="secondary"
          className="w-11 px-2 text-sm text-center"
          type="number"
          onChange={(e) => {
            const newValue = Number(e.target.value);
            if (newValue >= 0 && newValue <= 4) {
              setLocalValue(newValue); // Update local state
              onChange(newValue); // Optionally propagate immediately, or adjust as needed
            }
          }}
          value={localValue} // Use local state for input value
        />
      </div>
    </div>
  );
};

export default Speed;
