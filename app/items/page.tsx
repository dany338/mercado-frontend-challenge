import Link from "next/link";
import Image from "next/image";
import api from "../api";

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { results } = await api.item.search(searchParams.search);
  return (
    <section>
      <article className="grid gap-4">
        {results.map((item) => (
          <Link href={`/items/${item.id}`} key={item.id} className="flex gap-4">
            <Image src={item.thumbnail} alt={item.title} width="150" height="150" />
            <div>
              <p className="text-xl font-bold">
                {Number(item.price).toLocaleString("es-AR", {
                  style: "currency",
                  currency: item.currency_id,
                })}
              </p>
              <p>{item.title}</p>
            </div>
            <span className="ml-auto text-sm capitalize opacity-50">
              {item.seller_address.city.name}
            </span>
          </Link>
        ))}
      </article>
    </section>
  );
}
