'use client';

import { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const data = {
  name: "Flavor Profile",
  children: [
    {
      name: "Sour",
      children: [
        {
          name: "Sour/Fermented",
          children: [
            { name: "Winey" },
            { name: "Whiskey" },
            { name: "Fermented" },
            { name: "Over-ripe" }
          ]
        },
        { name: "Citric Acid" },
        { name: "Malic Acid" },
        { name: "Acetic Acid" }
      ]
    },
    {
      name: "Fruity",
      children: [
        {
          name: "Berry",
          children: [
            { name: "Blackberry" },
            { name: "Raspberry" },
            { name: "Blueberry" }
          ]
        },
        {
          name: "Citrus Fruit",
          children: [
            { name: "Lemon" },
            { name: "Lime" },
            { name: "Orange" }
          ]
        },
        {
          name: "Other Fruit",
          children: [
            { name: "Apple" },
            { name: "Grape" },
            { name: "Peach" },
            { name: "Pear" },
            { name: "Cherry" }
          ]
        }
      ]
    },
    {
      name: "Green/Vegetative",
      children: [
        { name: "Fresh" },
        { name: "Dark Green" },
        { name: "Vegetative" },
        { name: "Beany" },
        { name: "Olive Oil" },
        { name: "Raw" }
      ]
    },
    {
      name: "Other",
      children: [
        {
          name: "Papery/Musty",
          children: [
            { name: "Stale" },
            { name: "Cardboard" },
            { name: "Papery" },
            { name: "Woody" }
          ]
        },
        {
          name: "Chemical",
          children: [
            { name: "Bitter" },
            { name: "Salty" },
            { name: "Medicinal" }
          ]
        }
      ]
    },
    {
      name: "Roasted",
      children: [
        { name: "Cereal" },
        { name: "Grain" },
        { name: "Malt" }
      ]
    },
    {
      name: "Burnt",
      children: [
        { name: "Smoky" },
        { name: "Ashy" }
      ]
    },
    {
      name: "Spices",
      children: [
        { name: "Clove" },
        { name: "Pepper" },
        { name: "Cinnamon" },
        { name: "Nutmeg" }
      ]
    },
    {
      name: "Nutty/Cocoa",
      children: [
        { name: "Nutty" },
        { name: "Cocoa" },
        { name: "Dark Chocolate" }
      ]
    },
    {
      name: "Floral",
      children: [
        { name: "Rose" },
        { name: "Jasmine" },
        { name: "Black Tea" }
      ]
    },
    {
      name: "Sweet",
      children: [
        { name: "Brown Sugar" },
        { name: "Honey" },
        { name: "Caramel" },
        { name: "Maple Syrup" }
      ]
    }
  ]
};

export default function ForceDirectedTree() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    const container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
      })
    );

    const series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        downDepth: 2,
        initialDepth: 2,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        centerStrength: 0.5,
        minRadius: am5.percent(1),
        maxRadius: am5.percent(8),
        nodePadding: 15,
        manyBodyStrength: -10
      })
    );

    // Set colors for different categories
    series.nodes.template.setAll({
      draggable: true,
      tooltipText: "{name}"
    });

    series.data.setAll([data]);
    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div 
      ref={chartRef} 
      style={{ width: '100%', height: '100vh' }}
    />
  );
} 