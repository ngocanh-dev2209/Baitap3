import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Ẩn hoàn toàn thanh header trên cùng
      }}
    />
  );
}
