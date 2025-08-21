import { NextResponse } from "next/server"
import { products } from "@/lib/Product"

export async function GET() {
  return NextResponse.json(products)
}
