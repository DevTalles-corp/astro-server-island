import { defineAction, z } from 'astro:actions';

export const getAvailabilityById = defineAction({
  accept: 'json',
  input: z.string(),
  handler: async (placeId) => {
    console.log('se llamó?');

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const isAvailable = Math.random() > 0.5; // true | false
    const spotsAvailable = Math.floor(Math.random() * 10) + 1; // 1-11

    let message = 'No hay espacios disponibles';
    if (isAvailable) {
      message =
        spotsAvailable > 1
          ? `${spotsAvailable} espacios disponible`
          : `1 espacio disponible`;
    }

    return {
      id: placeId,
      isAvailable: isAvailable,
      spotsAvailable: spotsAvailable,
      message: message,
    };
  },
});
