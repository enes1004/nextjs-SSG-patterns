import { NextResponse } from "next/server";
import data from "../data.json";

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: number } },
) {
  return  NextResponse.json(data.find((i) => i.id == id));
}
