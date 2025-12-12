import topology from "../src/topology";
import geojson from "./network.json";
import { expect, test } from "vitest";

test("can create topology", () => {
  const topo = topology(geojson);
  expect(topo).toBeTruthy();
  expect(topo.vertices).toBeTruthy();
  expect(topo.edges).toBeTruthy();

  expect(Object.keys(topo.vertices).length).toBe(889);
});
