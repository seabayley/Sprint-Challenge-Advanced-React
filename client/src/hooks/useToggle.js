import { useState, useCallback } from "react";

export const useToggle = (init) => {
    const [on, setOn] = useState(init)
    return [on, useCallback(() => setOn(toggled => !toggled))]
}