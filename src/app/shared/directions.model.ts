export type Directions = {
  routes?: Route[];
  error_message?: string;
  status?: string;
};

export type Route = {
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
};
