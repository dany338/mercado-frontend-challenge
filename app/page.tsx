import ItemsPage from "./items/page";

export default function Home() {
  return (
    <main>
      <ItemsPage searchParams={{ search: "iphone" }} />
    </main>
  )
}
