import React from "react";
import { StyleSheet, Text, View, ART, Button } from "react-native";

import * as scale from "d3-scale";
import * as shape from "d3-shape";

const d3 = { scale, shape };
const { Surface, Group, Rectangle, Shape } = ART;

data = [
  { number: 8, name: "Fun activities" },
  { number: 7, name: "Dog" },
  { number: 16, name: "Food" },
  { number: 23, name: "Car" },
  { number: 42, name: "Rent" },
  { number: 4, name: "Misc" }
];

var arcs = d3.shape.pie().value(d => d.number)(data);

const diameter = 400;
const i = 1;

var path = d3.shape
  .arc()
  .outerRadius(diameter / 2)
  .padAngle(0.05)
  .innerRadius(30)(arcs[i]);

const App = () =>
  <View>
    <Text>changed</Text>
    <Text>Hey Eyvette!</Text>
    <Button title="yo" onPress={() => {}} />
    <Surface width={diameter} height={diameter}>
      <Group x={400} y={200}>
        <Shape
          d={path}
          stroke={"#2ca02c"} // green line
          strokeWidth={3}
        />
      </Group>
    </Surface>
  </View>;

export default App;
