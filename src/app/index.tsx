import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [screen, setScreen] = useState(1);
  const [userName, setUserName] = useState("");
  const [mssv, setMssv] = useState("");
  const [errors, setErrors] = useState({ userName: false, mssv: false });

  if (screen === 2) {
    return (
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.backButton} onPress={() => setScreen(1)}>
          <Text style={styles.backArrow}>←</Text>
        </Pressable>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Name: {userName}</Text>
          <Text style={styles.infoText}>Student ID: {mssv}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blockVertical}>
        <View style={[styles.box, { backgroundColor: "#1E88E5" }]}>
          <Text style={[styles.textNumber, { color: "#FFFFFF" }]}>1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#E53935" }]}>
          <Text style={[styles.textNumber, { color: "#FFFFFF" }]}>2</Text>
        </View>
      </View>

      <View style={styles.blockHorizontal}>
        <View style={[styles.box, { backgroundColor: "#FDD835" }]}>
          <Text style={[styles.textNumber, { color: "#000000" }]}>3</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#43A047" }]}>
          <Text style={[styles.textNumber, { color: "#FFFFFF" }]}>4</Text>
        </View>

        <View style={[styles.box, { flex: 2, backgroundColor: "#8E24AA" }]}>
          <Text style={[styles.textNumber, { color: "#FFFFFF" }]}>5</Text>
        </View>
      </View>

      <View style={[styles.box, { flex: 1.8, backgroundColor: "#FB8C00" }]}>
        <Text style={[styles.textNumber, { color: "#FFFFFF" }]}>6</Text>
      </View>
      <View style={{ flex: 1 }} />
      <Text style={styles.studentInfo}>Nhap thong tin sinh vien</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#BDBDBD"
        value={userName}
        onChangeText={(value) => {
          setUserName(value);
          setErrors((current) => ({ ...current, userName: false }));
        }}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your student ID"
        placeholderTextColor="#BDBDBD"
        value={mssv}
        onChangeText={(value) => {
          setMssv(value);
          setErrors((current) => ({ ...current, mssv: false }));
        }}
      />
      {errors.mssv ? (
        <Text style={styles.errorText}>Vui lòng nhập MSSV.</Text>
      ) : null}
      {errors.userName ? (
        <Text style={styles.errorText}>Vui lòng nhập UserName.</Text>
      ) : null}
      <Pressable
        style={styles.clickButton}
        onPress={() => {
          const missingUserName = !userName.trim();
          const missingMssv = !mssv.trim();
          setErrors({ userName: missingUserName, mssv: missingMssv });
          if (missingUserName || missingMssv) {
            return;
          }
          setScreen(2);
        }}
      >
        <Text style={styles.clickButtonText}>Click me</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#FFFFFF",
  },
  blockVertical: {
    flex: 2.2,
  },
  blockHorizontal: {
    flex: 2.2,
    flexDirection: "row",
    marginTop: 2,
  },
  box: {
    flex: 1,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  textNumber: {
    fontSize: 36,
    fontWeight: "bold",
  },
  studentInfo: {
    textAlign: "center",
    paddingBottom: 8,
    color: "#131212",
    fontSize: 15,
    fontWeight: "bold",
  },
  clickButton: {
    alignSelf: "center",
    backgroundColor: "#1E88E5",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 6,
    marginBottom: 8,
  },
  clickButtonText: {
    color: "#171616",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    alignSelf: "flex-start",
    backgroundColor: "#df640c",
    paddingVertical: 4,
    paddingHorizontal: 23,
    borderRadius: 8,
    marginBottom: 12,
  },
  backArrow: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#111010",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  errorText: {
    color: "#E53935",
    textAlign: "center",
    marginBottom: 6,
  },
  infoContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: "center",
  },
});
