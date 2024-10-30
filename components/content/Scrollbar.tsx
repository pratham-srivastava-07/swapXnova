"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from 'next/image'
const tokens = [
  { value: "sol", label: "SOL", imageUrl: "/sol.webp" },
  { value: "popcat", label: "POPCAT", imageUrl: "/popcat.webp" },
  { value: "usdc", label: "USDC", imageUrl: "/usdc.webp" },
  { value: "usdt", label: "USDT", imageUrl: "/usdt.webp" },
  { value: "pyusd", label: "PYUSD", imageUrl: "/pyusd.webp" },
];

interface ScrollbarProps {
  selectedToken: string;
  onTokenSelect: (token: string) => void;
  excludedToken?: string;
  onClick: () => void;
}

export function Scrollbar({ selectedToken, onTokenSelect, excludedToken, onClick }: ScrollbarProps) {
  const [openDropdown, setOpenDropdown] = React.useState<boolean>(false);

  // Filter out the excluded token
  const availableTokens = tokens.filter((token) => token.value !== excludedToken);

  return (
    <Popover open={openDropdown} onOpenChange={setOpenDropdown}>
      <PopoverTrigger asChild>
        <Button  variant="outline" role="combobox" aria-expanded={openDropdown} className="w-[200px] justify-between">
          {selectedToken ? (
            <div className="flex items-center space-x-2">
              <Image src={tokens.find((t) => t.value === selectedToken)?.imageUrl || "/img.webp"} alt={selectedToken} width={5} height={5} className="w-5 h-5" />
              <span>{tokens.find((t) => t.value === selectedToken)?.label}</span>
            </div>
          ) : (
            "Select Token"
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList onClick={onClick} className="bg-black text-white">
            <CommandEmpty>No token found.</CommandEmpty>
            <CommandGroup>
              {availableTokens.map((token) => (
                <CommandItem key={token.value} value={token.value} onSelect={() => onTokenSelect(token.value)}>
                  <Check className={cn("mr-2 h-4 w-4", selectedToken === token.value ? "opacity-100" : "opacity-0")} />
                  <Image src={token.imageUrl} alt={token.label} className="w-5 h-5 mr-2" width={5} height={5} />
                  {token.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
