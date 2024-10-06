"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const tokens = [
  {
    value: "sol",
    label: "SOL",
    imageUrl: "/sol.webp", 
  },
  {
    value: "popcat",
    label: "POPCAT",
    imageUrl: "/popcat.webp", 
  },
  {
    value: "usdc",
    label: "USDC",
    imageUrl: "/usdc.webp",
  },
  {
    value: "usdt",
    label: "USDT",
    imageUrl: "/usdt.webp",
  },
  {
    value: "pyusd",
    label: "PYUSD",
    imageUrl: "/pyusd.webp", 
  },
]

export function Scrollbar() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(tokens[0].value) 

  const selectedToken = tokens.find((token) => token.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedToken ? (
            <div className="flex items-center space-x-2">
              <img
                src={selectedToken.imageUrl}
                alt={selectedToken.label}
                className="w-5 h-5"
              />
              <span>{selectedToken.label}</span>
            </div>
          ) : (
            "Select Token" 
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList className="bg-black text-white">
            <CommandEmpty>No token found.</CommandEmpty>
            <CommandGroup>
              {tokens.map((token) => (
                <CommandItem
                  key={token.value}
                  value={token.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === token.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <img
                    src={token.imageUrl}
                    alt={token.label}
                    className="w-5 h-5 mr-2"
                  />
                  {token.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
