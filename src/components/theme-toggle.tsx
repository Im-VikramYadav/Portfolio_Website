
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 hover:scale-110 transition-transform duration-200 relative group overflow-hidden"
    >
      <div className="absolute inset-0 dark:bg-[url('/lovable-uploads/81cb9ca1-3885-427c-b1fc-0461aa79c82c.png')] bg-cover bg-center opacity-0 dark:opacity-75 group-hover:opacity-100 transition-opacity duration-200" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9A602] to-[#CCFF00] dark:from-[rgba(0,240,255,0.2)] dark:to-[rgba(255,255,255,0.2)] opacity-75 group-hover:opacity-100 transition-opacity duration-200" />
      <div className="relative z-10 size-8 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="size-5 text-[#EDEDED]" />
        ) : (
          <Moon className="size-5 text-[#222222]" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
