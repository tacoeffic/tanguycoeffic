import React from "react";
import ReactFlow, { Background, Controls } from "react-flow-renderer";

const nodes = [
  {
    "id": "contracts",
    "data": {
      "label": "Contracts"
    },
    "position": {
      "x": 900,
      "y": 50
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "orders",
    "data": {
      "label": "Orders"
    },
    "position": {
      "x": 800,
      "y": 100
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "bills",
    "data": {
      "label": "Bills"
    },
    "position": {
      "x": 1000,
      "y": 150
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "bill_detail",
    "data": {
      "label": "Bill detail"
    },
    "position": {
      "x": 900,
      "y": 200
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "bill_payments",
    "data": {
      "label": "Bill payments"
    },
    "position": {
      "x": 1050,
      "y": 200
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "subscriptions",
    "data": {
      "label": "Subscriptions"
    },
    "position": {
      "x": 1100,
      "y": 100
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "financial_closings",
    "data": {
      "label": "Financial closings"
    },
    "position": {
      "x": 1150,
      "y": 200
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "projects",
    "data": {
      "label": "Projects / opportunities"
    },
    "position": {
      "x": 600,
      "y": 200
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "budgets",
    "data": {
      "label": "Budgets / quotes"
    },
    "position": {
      "x": 450,
      "y": 150
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "budget_detail",
    "data": {
      "label": "Budget detail"
    },
    "position": {
      "x": 300,
      "y": 100
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "project_types",
    "data": {
      "label": "Project types"
    },
    "position": {
      "x": 600,
      "y": 50
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "project_leaders",
    "data": {
      "label": "Project leaders types"
    },
    "position": {
      "x": 700,
      "y": 50
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "organizations",
    "data": {
      "label": "Organizations"
    },
    "position": {
      "x": 850,
      "y": 300
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "contacts",
    "data": {
      "label": "Contacts"
    },
    "position": {
      "x": 1000,
      "y": 300
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "tasks",
    "data": {
      "label": "Tasks"
    },
    "position": {
      "x": 650,
      "y": 300
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "task_types",
    "data": {
      "label": "Task types"
    },
    "position": {
      "x": 750,
      "y": 300
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "timesheets",
    "data": {
      "label": "Timesheets"
    },
    "position": {
      "x": 650,
      "y": 400
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "timesheet_comments",
    "data": {
      "label": "Timesheet comments"
    },
    "position": {
      "x": 600,
      "y": 500
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "dimension_content",
    "data": {
      "label": "Dimension content"
    },
    "position": {
      "x": 750,
      "y": 500
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "dimensions",
    "data": {
      "label": "Dimensions"
    },
    "position": {
      "x": 850,
      "y": 500
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "dimension_options",
    "data": {
      "label": "Dimension options"
    },
    "position": {
      "x": 950,
      "y": 500
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "scheduling",
    "data": {
      "label": "Scheduling"
    },
    "position": {
      "x": 500,
      "y": 400
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "assignments",
    "data": {
      "label": "Assignments"
    },
    "position": {
      "x": 500,
      "y": 500
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "leave_requests",
    "data": {
      "label": "Leave requests"
    },
    "position": {
      "x": 500,
      "y": 600
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "resource_request",
    "data": {
      "label": "Resource request"
    },
    "position": {
      "x": 400,
      "y": 400
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "positionnings",
    "data": {
      "label": "Positionnings"
    },
    "position": {
      "x": 300,
      "y": 400
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "expense_requests",
    "data": {
      "label": "Expense requests"
    },
    "position": {
      "x": 100,
      "y": 450
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "expenses",
    "data": {
      "label": "Expenses"
    },
    "position": {
      "x": 200,
      "y": 450
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "expense_types",
    "data": {
      "label": "Expense types"
    },
    "position": {
      "x": 300,
      "y": 450
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "customized_fields",
    "data": {
      "label": "Customized fields"
    },
    "position": {
      "x": 200,
      "y": 550
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "customized_content",
    "data": {
      "label": "Customized content"
    },
    "position": {
      "x": 350,
      "y": 550
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "users",
    "data": {
      "label": "Users"
    },
    "position": {
      "x": 1100,
      "y": 400
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "teams",
    "data": {
      "label": "Teams"
    },
    "position": {
      "x": 1100,
      "y": 470
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "wages",
    "data": {
      "label": "Wages"
    },
    "position": {
      "x": 1200,
      "y": 420
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "daily_rates",
    "data": {
      "label": "Daily rates"
    },
    "position": {
      "x": 1050,
      "y": 370
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "daily_costs",
    "data": {
      "label": "Daily costs"
    },
    "position": {
      "x": 1150,
      "y": 370
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "customized_rates",
    "data": {
      "label": "Customized rates"
    },
    "position": {
      "x": 1100,
      "y": 390
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "users_skills",
    "data": {
      "label": "Users\u2019 skills"
    },
    "position": {
      "x": 1300,
      "y": 300
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "skills_structure",
    "data": {
      "label": "Skills structure"
    },
    "position": {
      "x": 1400,
      "y": 300
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "applicants",
    "data": {
      "label": "Applicants"
    },
    "position": {
      "x": 1300,
      "y": 400
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "applicant_skills",
    "data": {
      "label": "Applicant skills"
    },
    "position": {
      "x": 1350,
      "y": 400
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "job_history",
    "data": {
      "label": "Job history"
    },
    "position": {
      "x": 1300,
      "y": 470
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "job_types",
    "data": {
      "label": "Job types"
    },
    "position": {
      "x": 1400,
      "y": 470
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "countries",
    "data": {
      "label": "Countries"
    },
    "position": {
      "x": 1300,
      "y": 520
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  },
  {
    "id": "leave_remaining",
    "data": {
      "label": "Leave remaining days"
    },
    "position": {
      "x": 1400,
      "y": 520
    },
    "style": {
      "background": "#fffacc",
      "borderRadius": 6,
      "padding": 10,
      "fontWeight": "bold"
    }
  }
];
const edges = [
  {
    "id": "projects-budgets",
    "source": "projects",
    "target": "budgets"
  },
  {
    "id": "budgets-budget_detail",
    "source": "budgets",
    "target": "budget_detail"
  },
  {
    "id": "projects-project_types",
    "source": "projects",
    "target": "project_types"
  },
  {
    "id": "projects-project_leaders",
    "source": "projects",
    "target": "project_leaders"
  },
  {
    "id": "projects-tasks",
    "source": "projects",
    "target": "tasks"
  },
  {
    "id": "tasks-task_types",
    "source": "tasks",
    "target": "task_types"
  },
  {
    "id": "projects-scheduling",
    "source": "projects",
    "target": "scheduling"
  },
  {
    "id": "scheduling-assignments",
    "source": "scheduling",
    "target": "assignments"
  },
  {
    "id": "assignments-leave_requests",
    "source": "assignments",
    "target": "leave_requests"
  },
  {
    "id": "projects-organizations",
    "source": "projects",
    "target": "organizations"
  },
  {
    "id": "organizations-contacts",
    "source": "organizations",
    "target": "contacts"
  },
  {
    "id": "projects-contracts",
    "source": "projects",
    "target": "contracts"
  },
  {
    "id": "projects-orders",
    "source": "projects",
    "target": "orders"
  },
  {
    "id": "orders-bills",
    "source": "orders",
    "target": "bills"
  },
  {
    "id": "bills-bill_detail",
    "source": "bills",
    "target": "bill_detail"
  },
  {
    "id": "bills-bill_payments",
    "source": "bills",
    "target": "bill_payments"
  },
  {
    "id": "contracts-subscriptions",
    "source": "contracts",
    "target": "subscriptions"
  },
  {
    "id": "bills-financial_closings",
    "source": "bills",
    "target": "financial_closings"
  },
  {
    "id": "projects-timesheets",
    "source": "projects",
    "target": "timesheets"
  },
  {
    "id": "timesheets-timesheet_comments",
    "source": "timesheets",
    "target": "timesheet_comments"
  },
  {
    "id": "timesheets-dimension_content",
    "source": "timesheets",
    "target": "dimension_content"
  },
  {
    "id": "dimension_content-dimensions",
    "source": "dimension_content",
    "target": "dimensions"
  },
  {
    "id": "dimensions-dimension_options",
    "source": "dimensions",
    "target": "dimension_options"
  },
  {
    "id": "projects-resource_request",
    "source": "projects",
    "target": "resource_request"
  },
  {
    "id": "resource_request-positionnings",
    "source": "resource_request",
    "target": "positionnings"
  },
  {
    "id": "expenses-expense_types",
    "source": "expenses",
    "target": "expense_types"
  },
  {
    "id": "expense_requests-expenses",
    "source": "expense_requests",
    "target": "expenses"
  },
  {
    "id": "customized_fields-customized_content",
    "source": "customized_fields",
    "target": "customized_content"
  },
  {
    "id": "users-teams",
    "source": "users",
    "target": "teams"
  },
  {
    "id": "users-wages",
    "source": "users",
    "target": "wages"
  },
  {
    "id": "users-daily_rates",
    "source": "users",
    "target": "daily_rates"
  },
  {
    "id": "users-daily_costs",
    "source": "users",
    "target": "daily_costs"
  },
  {
    "id": "users-customized_rates",
    "source": "users",
    "target": "customized_rates"
  },
  {
    "id": "users-users_skills",
    "source": "users",
    "target": "users_skills"
  },
  {
    "id": "users_skills-skills_structure",
    "source": "users_skills",
    "target": "skills_structure"
  },
  {
    "id": "applicants-applicant_skills",
    "source": "applicants",
    "target": "applicant_skills"
  },
  {
    "id": "users-job_history",
    "source": "users",
    "target": "job_history"
  },
  {
    "id": "job_history-job_types",
    "source": "job_history",
    "target": "job_types"
  },
  {
    "id": "users-countries",
    "source": "users",
    "target": "countries"
  },
  {
    "id": "users-leave_remaining",
    "source": "users",
    "target": "leave_remaining"
  }
];

export default function Flow() {
  return (
    <div style={ height: '100vh', width: '100%' }>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
