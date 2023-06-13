
export const searchAdapter = (property) => {
  const result = {
    address: property?.address,
    city: property.city,
    id: property.id,
    images: property.images,
    lat: property.lat,
    lng: property.lng,
    name: property.name,
    persons: property.persons,
    position: property.position,
    type: property.type
  }

  return result
}