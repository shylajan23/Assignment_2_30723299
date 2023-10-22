const country = "China";
export default function (data, indicator) {
    return  {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        title: `Summary of Region Death`,
        width: "container",
        height: "container",
        data: { values: data },
        mark: "point",
        transform: [
            {
                aggregate: [
                    {
                        op: "sum",
                        field: "Value",
                        as: "Value",
                    },
                ],
                groupby: ["Year"],
            },
        ],
        encoding: {
            y: {
                field: "Value",
                type: "quantitative",
            },
            x: {
                field: "Year",
                type: "nominal",
            },
            tooltip: [
                { field: "Year", type: "nominal" },
                { field: "Value", type: "quantitative" },
            ],
        }
    };
}
