import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import ScreenWrapper from './ScreenWrapper';
import { colors } from '@/constants/theme';

const screenWidth = Dimensions.get('window').width;

const PieChartCommon = () => {
    const data = [
        { name: 'Ok', population: 40, color: colors.red, legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Not Ok', population: 30, color: colors.blue, legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Yer to be Checked', population: 20, color: colors.green, legendFontColor: '#7F7F7F', legendFontSize: 12 },
    ];

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <Text style={styles.title}>Pie Chart Example</Text>
                <PieChart
                    data={data}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#f5f5f5',
                        backgroundGradientFrom: '#f5f5f5',
                        backgroundGradientTo: '#f5f5f5',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    accessor={'population'}
                    backgroundColor={'transparent'}
                    paddingLeft={'15'}
                    absolute
                />
            </View>
        </ScreenWrapper>
    );
};

export default PieChartCommon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
