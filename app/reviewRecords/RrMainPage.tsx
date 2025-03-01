import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import { colors, spacingY } from '@/constants/theme';
import Typo from '@/components/Typo';
import BackButton from '@/components/BackButton';
import { useRouter } from 'expo-router';
import AvatarCommon from '@/components/AvatarCommon';



const data = [
    { title: 'Inspection Compliance', description: 'OK, NOT OK, NOT CHECKED', path: '/reviewRecords/inspectorCompliance' },
    { title: 'Planner Compliance', description: 'SPARES AWAITED, EXECUTABLE', path: '/reviewRecords/PlannerCompliance' },
    { title: 'Execution Compliance', description: 'OPEN, CLOSED', path: '/reviewRecords/ExecutionCompliance' },
    { title: 'Equipment Abnormality', description: 'EQUIPMENT HEALTH SCORE', path: '/reviewRecords/EquipmentAbnormality' },
    { title: 'Inspection Abnormality', description: 'Inspection Counts Added by Executor/Inspector', path: '/reviewRecords/InspectionAbnormality' },
    { title: 'Plant Overview', description: 'Plant overview by section', path: '/reviewRecords/PlantOverview' },
];

const RrMainPage = () => {
    const router = useRouter();
    return (
        <ScreenWrapper>
            {/* Header Section */}
            <View style={styles.header}>
                <BackButton iconSize={28} />
                <Typo size={20} fontWeight="700" color={colors.black}>
                    RR Review Records
                </Typo>
                <AvatarCommon name="Arihant" size={40} backgroundColor={colors.gray} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {data.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.card} onPress={() => router.push(item.path as any)}
                    >
                        <View style={styles.iconPlaceholder} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </ScreenWrapper>
    );
};

export default RrMainPage;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: spacingY._20,
        backgroundColor: colors.green, // Adjust color as needed
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: spacingY._30,
        paddingHorizontal: spacingY._20,
    },
    buttonContainer: {
        width: '80%',
    },
    box: {
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        marginBottom: 50,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DCE1B3', // Light greenish box
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    iconPlaceholder: {
        width: 40,
        height: 40,
        backgroundColor: '#555', // Placeholder for icons
        borderRadius: 20,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1D5B2D', // Dark green
    },
    description: {
        fontSize: 14,
        color: '#333',
        marginTop: 3,
    },
});
