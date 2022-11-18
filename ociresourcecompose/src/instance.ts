import composeWithJson from 'graphql-compose-json';

const restApiResponse = {
        instance: {
          availabilityDomain: 'vWQc:EU-FRANKFURT-1-AD-2',
          capacityReservationId: null,
          compartmentId: 'ocid1.compartment.oc1..aaaaaaaaeh4st5erqm2coqpxcubpftuxwxa5n6edevl3cyl7fhczgphwoohq',
          dedicatedVmHostId: null,
          displayName: 'instance-20221116-1402',
          extendedMetadata: {},
          faultDomain: 'FAULT-DOMAIN-3',
          freeformTags: {},
          id: 'ocid1.instance.oc1.eu-frankfurt-1.antheljtsvm4qnyccwjglfh3fzwr4mcjm4n5xzcckskqrrdgrusraxwodi4a',
          imageId: 'ocid1.image.oc1.eu-frankfurt-1.aaaaaaaa47555lp4mjbiuf64doxtnbimrwk57m4sfgu3gonaf5i2cteil5iq',
          ipxeScript: null,
          launchMode: 'PARAVIRTUALIZED',
          launchOptions: {
            bootVolumeType: 'PARAVIRTUALIZED',
            firmware: 'UEFI_64',
            networkType: 'PARAVIRTUALIZED',
            remoteDataVolumeType: 'PARAVIRTUALIZED',
            isPvEncryptionInTransitEnabled: true,
            isConsistentVolumeNamingEnabled: true
          },
          instanceOptions: { areLegacyImdsEndpointsDisabled: false },
          availabilityConfig: {
            isLiveMigrationPreferred: null,
            recoveryAction: 'RESTORE_INSTANCE'
          },
          preemptibleInstanceConfig: undefined,
          lifecycleState: 'TERMINATED',
          metadata: {},
          region: 'eu-frankfurt-1',
          shape: 'VM.Standard.E2.1.Micro',
          shapeConfig: {
            ocpus: 1,
            memoryInGBs: 1,
            baselineOcpuUtilization: null,
            processorDescription: '2.0 GHz AMD EPYC™ 7551 (Naples)',
            networkingBandwidthInGbps: 0.48,
            maxVnicAttachments: 1,
            gpus: 0,
            gpuDescription: null,
            localDisks: 0,
            localDisksTotalSizeInGBs: null,
            localDiskDescription: null
          },
          isCrossNumaNode: false,
          sourceDetails: {
            sourceType: 'image',
            bootVolumeSizeInGBs: null,
            imageId: 'ocid1.image.oc1.eu-frankfurt-1.aaaaaaaa47555lp4mjbiuf64doxtnbimrwk57m4sfgu3gonaf5i2cteil5iq',
            kmsKeyId: null,
            bootVolumeVpusPerGB: null
          },
          timeCreated: '2022-11-16T13:05:59.294Z',
          agentConfig: {
            isMonitoringDisabled: false,
            isManagementDisabled: false,
            areAllPluginsDisabled: false
          },
          timeMaintenanceRebootDue: null,
          timeStopScheduled: null,
          preferredMaintenanceAction: null,
          platformConfig: undefined
        },
        etag: 'c07f5ca8dded40ec5260c446a1e02d670df84bcc1a6eeb2bcec85801ab64e842',
        opcRequestId: '558115D065C1-11ED-BEBA-0D07EC0FC/CBA6FA34DD93AA66FE322FB88674B797/B0667F2219B24ECC822844DFEA2CFEC5'
      };

export const InstanceTC = composeWithJson('Instance', restApiResponse);
export const InstanceTCGraphQLType = InstanceTC.getType();