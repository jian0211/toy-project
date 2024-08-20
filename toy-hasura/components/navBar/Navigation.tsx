"use client";

import { Nav } from "./parts";

export default function Navigation() {
  return (
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/auth">Auth</Nav.Link>
      <Nav.Link href="/some1">some1</Nav.Link>
      <Nav.Link href="/some2">some2</Nav.Link>
    </Nav>
  );
}
