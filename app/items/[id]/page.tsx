import api from "@/app/api";
import Image from "next/image";
import { Suspense } from "react";

// export async function generateMetaData({ params: {id}}: { params: {id: string}}) {
//   const item = await api.item.fetch(id);

//   return {
//     title: item.title,
//     openGraph: {
//       images: [
//         {
//           url: item.thumbnail,
//           width: 400,
//           height: 400,
//           alt: item.title,
//         },
//       ],
//     },
//   }
// }

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function Description({id}: {id: string}) {
  await sleep(500);
  const description = await api.item.description.fetch(id);

  return <p>{description}</p>;
}

export default async function ItemPage({ params: {id}}: { params: { id: string }}) {
  const item = await api.item.fetch(id);
  return (
    <section className="grid gap-2">
      <Image src={item.thumbnail} alt={item.title} width="400" height="400" />
      <p className="text-xl font-bold">
        {Number(item.price).toLocaleString("es-AR", {
          style: "currency",
          currency: item.currency_id,
        })}
      </p>
      <p>{item.title}</p>
      <hr />
      <Suspense fallback={<span>cargando la descripcion</span>}>
        <Description id={id} />
      </Suspense>
    </section>
  )
}
