import React from "react";

export default function InputError({ message }: { message: string }) {
  return <span style={{ fontSize: "10px", color: "red" }}>{message}</span>;
}
