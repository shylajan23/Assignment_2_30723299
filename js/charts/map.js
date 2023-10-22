
export default function (data, indicator,year) {
    return {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        title: `Deaths by ${indicator} based on Country (${year})  `,
        width: "container",
        height: "container",
        projection: {
            type: "equalEarth",
        },

        layer: [
            {
                data: {
                    url: "https://raw.githubusercontent.com/shylajan23/Assignment_2_30723299/main/ne_110m.json",
                    format: {
                        type: "topojson",
                        feature: "ne_110m_graticules_30",
                    },
                },
                mark: {
                    type: "geoshape",
                    fill: null,
                    stroke: "lightgray",
                },
            },
            {
                data: {
                    url: "https://raw.githubusercontent.com/shylajan23/Assignment_2_30723299/main/ne_110m_ocean.json",
                    format: {
                        type: "topojson",
                        feature: "oceans",
                    },
                },
                mark: {
                    type: "geoshape",
                    fill: "#75b3fa",
                },
            },
            {
                data: {
                    url: "https://raw.githubusercontent.com/shylajan23/Assignment_2_30723299/main/ne_110m.json",
                    format: {
                        type: "topojson",
                        feature: "ne_110m_admin_0_countries",
                    },
                },

                transform: [
                    {
                        lookup: "properties.ADM0_ISO",
                        from: {
                            data: {values: data},
                            key: "Code",
                            fields: ["Value", "Country"],
                        },
                    },
                ],

                mark: {
                    type: "geoshape",
                    stroke: "gray",
                },
                encoding: {
                    color: {
                        field: "Value",
                        type: "quantitative",
                        scale: {
                            range: ["#F5E8B7", "#2182fd"]
                        }
                    },

                    tooltip: [
                        {field: "properties.NAME", type: "nominal"},
                        {field: "Country", type: "nominal"},
                        {field: "Value", type: "quantitative"},
                    ],
                },
            },
        ],
    };
}
