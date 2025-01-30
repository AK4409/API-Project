import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const HomeScreen = () => {
  const services = [
    { id: 1, name: 'Load Money', icon: '💰' },
    { id: 2, name: 'Send Money', icon: '📤' },
    { id: 3, name: 'Bank Transfer', icon: '🏦' },
    { id: 4, name: 'Pay Bills', icon: '📄' },
    { id: 5, name: 'Mobile Recharge', icon: '📱' },
    { id: 6, name: 'Internet', icon: '🌐' },
    { id: 7, name: 'Airlines', icon: '✈️' },
    { id: 8, name: 'More', icon: '⋯' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceAmount}>Rs. 10,000</Text>
        <TouchableOpacity style={styles.topupButton}>
          <Text style={styles.topupButtonText}>Top Up</Text>
        </TouchableOpacity>
      </View>

      {/* Services Grid */}
      <View style={styles.servicesContainer}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.serviceItem}
          >
            <Text style={styles.serviceIcon}>{service.icon}</Text>
            <Text style={styles.serviceName}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Transactions */}
      <View style={styles.transactionsContainer}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        {/* Add transaction items here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  balanceContainer: {
    backgroundColor: '#60b246',
    padding: 20,
    alignItems: 'center',
  },
  balanceLabel: {
    color: '#fff',
    fontSize: 16,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  topupButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  topupButtonText: {
    color: '#60b246',
    fontWeight: 'bold',
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  serviceItem: {
    width: '25%',
    alignItems: 'center',
    padding: 10,
  },
  serviceIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  serviceName: {
    fontSize: 12,
    textAlign: 'center',
  },
  transactionsContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen; 