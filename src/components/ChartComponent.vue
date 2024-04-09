<template>
    <div class="graph-wrapper">
        <div class="container">
            <h2>Аналитика по визитам</h2>
            <div class="graph-wrapper__chart" ref="chartdiv">
            </div>
        </div>
    </div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { mapGetters } from 'vuex';
export default {
    name: 'ChartComponent',
    computed: {
        ...mapGetters([
            'getChartData'
        ])
    },
    mounted() {
        let root = am5.Root.new(this.$refs.chartdiv);


        const myTheme = am5.Theme.new(root)

        myTheme.rule("AxisLabel", ["minor"]).setAll({
            fill: am5.color(0xFF0000),
            fontSize: 10
        })
        root.setThemes([am5themes_Animated.new(root), myTheme]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panY: false,
                layout: root.verticalLayout
            })
        );

        // Define data


        // Create Y-axis
        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );

        // Create X-Axis
        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {
                    interactive: true
                }),
                categoryField: "date"
            })
        );


        xAxis.data.setAll(this.getChartData);

        // Create series
        let series = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Аналитика по визитам",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "visits",
                categoryXField: "date",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "right",
                    labelText: "{categoryX}: {valueY}"
                })
            })
        );
        series.data.setAll(this.getChartData);

        series.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    radius: 6,
                    stroke: series.get("fill"),
                    strokeWidth: 2,
                    fill: am5.color(0xffffff)
                })
            });
        });



        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {}));

        this.root = root;
    },

    beforeDestroy() {
        if (this.root) {
            this.root.dispose();
        }
    }
}
</script>
<style lang="scss">
.graph-wrapper {
    width: 100%;
    max-width: 1024px;
    margin-top: 48px;
    h2{
        font-weight: 500;
        font-size: 24px;
    }
    &__chart {
        width: 100%;
        height: 500px;
        margin-top: 16px;
    }
}
</style>