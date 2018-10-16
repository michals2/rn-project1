import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Svg } from "expo";

import { tcpRelCcsToTtlpRelGcs } from "./utils";

const { Rect } = Svg;
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const windowDims = [windowWidth, windowHeight];
const tileDims = [100, 100];

const horizontalGap = 10;
const verticalGap = 10;

const horizontalSpacing = tileDims[0] + horizontalGap;
const verticalSpacing = tileDims[1] + verticalGap;

const tiles = [
  { coords: [0, 0] }, // 0
  { coords: [horizontalSpacing, 0] }, // 1
  { coords: [horizontalSpacing / 2, -verticalSpacing] }, // 2
  { coords: [-horizontalSpacing / 2, -verticalSpacing] }, // 3
  { coords: [-horizontalSpacing, 0] }, // 4
  { coords: [-horizontalSpacing / 2, verticalSpacing] }, // 5
  { coords: [horizontalSpacing / 2, verticalSpacing] } // 6
];

const Grid = () =>
  <View
    style={[
      StyleSheet.absoluteFill,
      {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray"
      }
    ]}
  >
    <Svg height={windowHeight} width={windowWidth}>
      {tiles.map((tile, i) => {
        const gcs = tcpRelCcsToTtlpRelGcs(tile.coords, tileDims, windowDims);
        return (
          <Rect
            key={i}
            x={gcs[0]}
            y={gcs[1]}
            width={tileDims[0]}
            height={tileDims[1]}
            strokeWidth={2}
            stroke="red"
            fill="yellow"
          />
        );
      })}
    </Svg>
  </View>;

export default Grid;
