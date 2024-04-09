import { Feature, FeatureCollection, LineString } from 'geojson';

declare function lineSliceAtIntersection(
  line: Feature<LineString>,
  segmenter: Feature,
): FeatureCollection<LineString>;

export { lineSliceAtIntersection as default };
