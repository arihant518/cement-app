import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';

const PieChartCommon = () => {
  const pieData = [
    { value: 40, color: '#3498db', gradientCenterColor: '#2980b9', text: 'OK - 20' },
    { value: 30, color: '#2ecc71', gradientCenterColor: '#27ae60', text: 'Not-30' },
    { value: 20, color: '#e74c3c', gradientCenterColor: '#c0392b', text: 'Yet to be checked-40' },
    { value: 10, color: '#f1c40f', gradientCenterColor: '#f39c12', text: 'Pending' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Example</Text>
      <PieChart
        data={pieData}
        donut
        showGradient
        sectionAutoFocus
        radius={200}
        innerRadius={0}
        showText
        textSize={12}
        textColor="white"
        centerLabelComponent={() => (
          <Text style={styles.centerText}>Total Status</Text>
        )}
      />
    </View>
  );
};

export default PieChartCommon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  centerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#34495e',
  },
});
