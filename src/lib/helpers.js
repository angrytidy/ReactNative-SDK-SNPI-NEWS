export const shourtCycleStatus = (Role, statuts) => {
  let status = [];

  switch (statuts) {
    case 'en_attente':
      switch (Role) {
        case 'director':
          status = [
            ...status,
            {
              label: 'Retracté',
              value: 'retractre',
            },
          ];
          break;
        case 'manager':
          status = [
            ...status,
            {
              label: 'Retracté',
              value: 'retractre',
            },
          ];

          break;
        case 'vendor':
          status = [
            ...status,
            {
              label: 'Retracté',
              value: 'retractre',
            },
          ];
          break;
        default:
      }
      break;

    case 'incomplete':
      switch (Role) {
        case 'director':
          status = [
            ...status,
            {
              label: 'Relancée',
              value: 'relancee',
            },
            {
              label: 'Retractée',
              value: 'retractre',
            },
          ];
          break;
        case 'manager':
          status = [
            ...status,
            {
              label: 'Relancée',
              value: 'relancee',
            },
            {
              label: 'Retractée',
              value: 'retractre',
            },
          ];
          break;
        case 'vendor':
          status = [
            ...status,
            {
              label: 'Relancée',
              value: 'relancee',
            },
            {
              label: 'Retractée',
              value: 'retractre',
            },
          ];
          break;
        default:
      }
      break;
    case 'relancee':
      switch (Role) {
        case 'director':
          status = [
            ...status,
            {
              label: 'Retracté',
              value: 'retractre',
            },
          ];
          break;
        case 'manager':
          status = [
            ...status,
            {
              label: 'Retracté',
              value: 'retractre',
            },
          ];
          break;
        case 'vendor':
          status = [
            ...status,
            {
              label: 'Retracté',
              value: 'retractre',
            },
          ];
          break;
        default:
      }
      break;

    default:
  }

  return status;
};

export const longCycleStatus = (Role, statuts) => {
  let status = [];

  switch (statuts) {
    case 'en_attente':
      switch (Role) {
        case 'director':
          status = [
            ...status,
            {
              label: 'Suspendu',
              value: 'suspendu',
            },
            {
              label: 'Annuler',
              value: 'annule',
            },
          ];
          break;
        case 'manager':
          status = [
            ...status,
            {
              label: 'Suspendu',
              value: 'suspendu',
            },
            {
              label: 'Annuler',
              value: 'annule',
            },
          ];
          break;
        case 'vendor':
          status = [
            ...status,
            {
              label: 'Suspendu',
              value: 'suspendu',
            },
            {
              label: 'Annuler',
              value: 'annule',
            },
          ];
          break;

        default:
          break;
      }
      break;

    case 'incomplet':
      switch (Role) {
        case 'director':
          status = [
            ...status,
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'En Attente',
              value: 'en_attente',
            },
          ];
          break;
        case 'manager':
          status = [
            ...status,
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'En Attente',
              value: 'en_attente',
            },
          ];
          break;
        case 'vendor':
          status = [
            ...status,
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'En Attente',
              value: 'en_attente',
            },
          ];
          break;

        default:
          break;
      }
    case 'annule':
      switch (Role) {
        case 'director':
          status = [
            ...status,
            {
              label: 'Recycler',
              value: 'recycler',
            },
          ];
          break;
        case 'manager':
          status = [
            ...status,
            {
              label: 'Recycler',
              value: 'recycler',
            },
          ];
          break;
        case 'vendor':
          status = [
            ...status,
            {
              label: 'Recycler',
              value: 'recycler',
            },
          ];
          break;

        default:
          break;
      }

    case 'suspendu':
      switch (Role) {
        case 'director':
          status = [
            ...status,
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'Recycler',
              value: 'recycler',
            },
          ];
          break;
        case 'manager':
          status = [
            ...status,
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'Recycler',
              value: 'recycler',
            },
          ];
          break;
        case 'vendor':
          status = [
            ...status,
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'Recycler',
              value: 'recycler',
            },
          ];
          break;

        default:
          break;
      }

    case 'proposition':
      switch (Role) {
        case 'director':
          status = [
            ...status,
            {
              label: 'Signé',
              value: 'signe',
            },
            {
              label: 'Suspendu',
              value: 'suspendu',
            },
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'Recycler',
              value: 'recycler',
            },
            {
              label: 'En Négociation',
              value: 'en_negociation',
            },
          ];
          break;
        case 'manager':
          status = [
            ...status,
            {
              label: 'Signé',
              value: 'signe',
            },
            {
              label: 'Suspendu',
              value: 'suspendu',
            },
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'Recycler',
              value: 'recycler',
            },
            {
              label: 'En Négociation',
              value: 'en_negociation',
            },
          ];
          break;
        case 'vendor':
          status = [
            ...status,
            {
              label: 'Signé',
              value: 'signe',
            },
            {
              label: 'Suspendu',
              value: 'suspendu',
            },
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'Recycler',
              value: 'recycler',
            },
            {
              label: 'En Négociation',
              value: 'en_negociation',
            },
          ];
          break;

        default:
          break;
      }

    case 'recycler':
      switch (Role) {
        case 'director':
          status = [
            ...status,
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'Suspendu',
              value: 'suspendu',
            },
          ];
          break;
        case 'manager':
          status = [
            ...status,
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'Suspendu',
              value: 'suspendu',
            },
          ];
          break;
        case 'vendor':
          status = [
            ...status,
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'Suspendu',
              value: 'suspendu',
            },
          ];

        default:
          break;
      }

    case 'signe':
      break;

    case 'signature_incomplete':
      switch (Role) {
        case 'director':
          status = [
            ...status,
            {
              label: 'Signé',
              value: 'signe',
            },
          ];
          break;
        case 'manager':
          status = [
            ...status,
            {
              label: 'Signé',
              value: 'signe',
            },
          ];
          break;
        case 'vendor':
          status = [
            ...status,
            {
              label: 'Signé',
              value: 'signe',
            },
          ];
          break;

        default:
          break;
      }

    case 'en_attente_validation':
      break;

    case 'valide':
      break;

    case 'en_negociation':
      switch (Role) {
        case 'director':
          status = [
            ...status,
            {
              label: 'Signé',
              value: 'signe',
            },
            {
              label: 'Suspendu',
              value: 'suspendu',
            },
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'Recycler',
              value: 'recycler',
            },
          ];
          break;
        case 'manager':
          status = [
            ...status,
            {
              label: 'Signé',
              value: 'signe',
            },
            {
              label: 'Suspendu',
              value: 'suspendu',
            },
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'Recycler',
              value: 'recycler',
            },
          ];
          break;
        case 'vendor':
          status = [
            ...status,
            {
              label: 'Signé',
              value: 'signe',
            },
            {
              label: 'Suspendu',
              value: 'suspendu',
            },
            {
              label: 'Annuler',
              value: 'annule',
            },
            {
              label: 'Recycler',
              value: 'recycler',
            },
          ];
          break;

        default:
          break;
      }

    case 'expire ':
      break;

    case 'director':
      status = [
        ...status,
        {
          label: 'Recycler',
          value: 'recycler',
        },
      ];
      break;
    case 'manager':
      status = [
        ...status,
        {
          label: 'Recycler',
          value: 'recycler',
        },
      ];
      break;
    case 'vendor':
      status = [
        ...status,
        {
          label: 'Recycler',
          value: 'recycler',
        },
      ];
      break;

    default:
      break;
  }

  return status;
};
