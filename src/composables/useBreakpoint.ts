import { ref, onDeactivated, onMounted } from "vue";

type Device = "mobile" | "tablet" | "desktop";

const DeviceBreakpoints: Record<Device, number> = {
  mobile: 0,
  tablet: 768,
  desktop: 968,
};

export default function useBreakpoint() {
  const breakpoint = ref<Record<Device, boolean>>({
    mobile: false,
    tablet: false,
    desktop: false,
  });

  function updateScreen() {
    Object.entries(DeviceBreakpoints).forEach(([device, value]) => {
      const d = device as Device;

      if (window.innerWidth >= value) {
        breakpoint.value[d] = true;
      } else {
        breakpoint.value[d] = false;
      }
    });
  }

  addEventListener("resize", updateScreen);

  onMounted(() => {
    updateScreen();
  });

  onDeactivated(() => removeEventListener("resize", updateScreen));

  return {
    breakpoint,
  };
}
