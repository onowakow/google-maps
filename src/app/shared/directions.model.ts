export type Directions = {
  routes: [
    {
      legs: [
        {
          distance: { text: string; value: number };
          duration: { text: string; value: number };
          end_address: string;
          start_address: string;
          steps: [
            {
              html_instructions: string;
            }
          ];
        }
      ];
      summary: string;
    }
  ];
};
