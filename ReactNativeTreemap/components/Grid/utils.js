// centered coordinates --> global coordinates
export const ccsToGcs = (cCoords, screenDims) => {
  if (screenDims.some(dim => dim < 0))
    throw "Screen dimensions must be positive";

  const [x1, y1] = cCoords;
  const [width, height] = screenDims;

  const x2 = x1 + width / 2;
  const y2 = height / 2 - y1;

  return [x2, y2];
};

// tile center point |_ centered --> tile top left point |_ centered
export const tcpRelCcsToTtlpRelCcs = (tcpRelCcs, tileDims) => {
  if (tileDims.some(dim => dim < 0)) throw "Tile dimensions must be positive";

  const [x1, y1] = tcpRelCcs;
  const [width, height] = tileDims;

  const x2 = x1 - width / 2;
  const y2 = y1 + height / 2;

  return [x2, y2];
};

// tile center point |_ centered --> tile top left point |_ global
export const tcpRelCcsToTtlpRelGcs = (tcpRelCcs, tileDims, screenDims) => {
  // tile top left point |_ centered
  const ttlpRelCcs = tcpRelCcsToTtlpRelCcs(tcpRelCcs, tileDims);
  // tile top left point |_ global
  const ttlpRelGcs = ccsToGcs(ttlpRelCcs, screenDims);

  return ttlpRelGcs;
};

const chunkTileArray = tileArray => {
  const centerTile = tileArray[0];
  let remainingTiles = tileArray.slice(1);

  const chunkedTileArray = [[centerTile]];
  let i = 6;
  while (remainingTiles.length > 0) {
    chunkedTileArray.push(remainingTiles.slice(0, i));
    remainingTiles = remainingTiles.slice(i);
    i = i + 6;
  }
  return chunkedTileArray;
};

const chunkedTileArrayToFlatArrayWithCoords = (
  chunkedTileArray,
  horizontalSpacing,
  verticalSpacing
) => {
  return chunkedTileArray.reduce((tileArrayWithCoords, chunk, i) => {
    console.log(tileArrayWithCoords);
    if (i === 0) return [{ ...chunk[0], coords: [0, 0] }];
    else return tileArrayWithCoords;
    // replace the else statement with logic to handle the rings of tiles
  }, []);
};

const chunkedTileAray = chunkTileArray(
  // "abcdefghijklmnopqrstuvwxyz".split("").map((val, pos) => ({ val, pos }))
  "abcdefg".split("").map((val, pos) => ({ val, pos }))
);
// console.log(chunkedTileAray);
console.log(chunkedTileArrayToFlatArrayWithCoords(chunkedTileAray));
