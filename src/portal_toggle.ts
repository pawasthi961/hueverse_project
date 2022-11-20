import { Box3, Object3D, Vector3 } from 'three'

// import { createActionQueue, removeActionQueue } from '@xrengine/hyperflux'

// import { changeState } from '../../avatar/animation/AnimationGraph'
// import { AvatarStates } from '../../avatar/animation/Util'
// import { AvatarAnimationComponent } from '../../avatar/components/AvatarAnimationComponent'
// import { AvatarComponent } from '../../avatar/components/AvatarComponent'
// import { AvatarControllerComponent } from '../../avatar/components/AvatarControllerComponent'
import { Engine } from '@xrengine/engine/src/ecs/classes/Engine'
// import { EngineActions } from '../../ecs/classes/EngineState'
import { World } from '@xrengine/engine/src/ecs/classes/World'
import {
  addComponent,
  defineQuery,
  getComponent,
  hasComponent,
  removeComponent,
  setComponent,
  updateComponent
} from '@xrengine/engine/src/ecs/functions/ComponentFunctions'
// import { Physics } from '../../physics/classes/Physics'

import { RigidBodyComponent } from '@xrengine/engine/src/physics/components/RigidBodyComponent'
// import { CollisionGroups } from '../../physics/enums/CollisionGroups'
// import { getInteractionGroups } from '../../physics/functions/getInteractionGroups'
// import { RaycastHit, SceneQueryType } from '../../physics/types/PhysicsTypes'
// import {
//   MountPoint,
//   MountPointComponent,
//   SCENE_COMPONENT_MOUNT_POINT,
//   SCENE_COMPONENT_MOUNT_POINT_DEFAULT_VALUES
// } from '../../scene/components/MountPointComponent'
// import { Object3DComponent } from '../../scene/components/Object3DComponent'
// import { SittingComponent } from '../../scene/components/SittingComponent'
// import { SCENE_COMPONENT_VISIBLE, VisibleComponent } from '../../scene/components/VisibleComponent'
// import { ScenePrefabs } from '../../scene/systems/SceneObjectUpdateSystem'
// import {
//   SCENE_COMPONENT_TRANSFORM,
//   SCENE_COMPONENT_TRANSFORM_DEFAULT_VALUES,
//   TransformComponent
// } from '../../transform/components/TransformComponent'


// import { BoundingBoxComponent } from '../components/BoundingBoxComponents'
// import { createInteractUI } from '../functions/interactUI'
// import { addInteractableUI } from './InteractiveSystem'

//changes

import { 
  PortalComponent, 
  SCENE_COMPONENT_PORTAL,
  SCENE_COMPONENT_PORTAL_DEFAULT_VALUES } from '@xrengine/engine/src/scene/components/PortalComponent'


//end changes

  //import { Mesh } from '@gltf-transform/core'
// import { Mesh, MeshBasicMaterial, Quaternion, SphereGeometry} from 'three'

/**
 * @todo refactor this into i18n and configurable
 */
// const mountPointInteractMessages = {
//   [MountPoint.seat]: 'Press E to Reveal Portal'
// }

export default async function PortalToggle(world: World) {
//   world.scenePrefabRegistry.set(ScenePrefabs.chair, [
//     { name: SCENE_COMPONENT_TRANSFORM, props: SCENE_COMPONENT_TRANSFORM_DEFAULT_VALUES },
//     { name: SCENE_COMPONENT_VISIBLE, props: true},
//     { name: SCENE_COMPONENT_MOUNT_POINT, props: SCENE_COMPONENT_MOUNT_POINT_DEFAULT_VALUES }
//   ])



//   world.sceneComponentRegistry.set(MountPointComponent.name, SCENE_COMPONENT_MOUNT_POINT)
//   world.sceneLoadingRegistry.set(SCENE_COMPONENT_MOUNT_POINT, {
//     defaultData: SCENE_COMPONENT_MOUNT_POINT_DEFAULT_VALUES
//   })
//changes

// world.scenePrefabRegistry.set(ScenePrefabs.portal, [
//   { name: SCENE_COMPONENT_PORTAL, props: SCENE_COMPONENT_PORTAL_DEFAULT_VALUES },
//   { name: SCENE_COMPONENT_VISIBLE, props: true}
// ])
// world.sceneComponentRegistry.set(PortalComponent.name, SCENE_COMPONENT_PORTAL)
// world.sceneLoadingRegistry.set(SCENE_COMPONENT_PORTAL, {
//   defaultData: SCENE_COMPONENT_PORTAL_DEFAULT_VALUES
// })

// world.scenePrefabRegistry.set(ScenePrefabs.model, [
//   { name: SCENE_COMPONENT_VISIBLE, props: true}
// ])
// world.sceneComponentRegistry.set(ModelComponent.name, SCENE_COMPONENT_MODEL)

//end changes
  
if (Engine.instance.isEditor)
    return {
    //   execute: () => {},
    //   cleanup: async () => {
    //     world.scenePrefabRegistry.delete(ScenePrefabs.chair)
    //     world.sceneComponentRegistry.delete(MountPointComponent.name)
    //     world.sceneLoadingRegistry.delete(SCENE_COMPONENT_MOUNT_POINT)
    //     //changes
    //     world.scenePrefabRegistry.delete(ScenePrefabs.portal)
    //     world.sceneComponentRegistry.delete(PortalComponent.name)
    //     world.sceneLoadingRegistry.delete(SCENE_COMPONENT_PORTAL)

    //     // world.scenePrefabRegistry.delete(ScenePrefabs.model)
    //     // world.sceneComponentRegistry.delete(ModelComponent.name)
    //     //endchanges
    //   }
    }

//   const mountPointActionQueue = createActionQueue(EngineActions.interactedWithObject.matches)
//   const mountPointQuery = defineQuery([MountPointComponent])
//   const sittingIdleQuery = defineQuery([SittingComponent])
  
  //changes
  const portalQuery = defineQuery([PortalComponent])
  // const modelQuery =  defineQuery([ModelComponent])
  
  //end changes
  
  const execute = () => {

    // for (const entity of mountPointQuery.enter()) {
    //   const mountPoint = getComponent(entity, MountPointComponent)
    //   addComponent(entity, BoundingBoxComponent, {
    //     box: new Box3().setFromCenterAndSize(
    //       getComponent(entity, TransformComponent).position,
    //       new Vector3(0.1, 0.1, 0.1)
    //     )
    //   })
    //   addInteractableUI(entity, createInteractUI(entity, mountPointInteractMessages[mountPoint.type]))
    // }
    // for (const action of mountPointActionQueue()) {
    //   if (action.$from !== Engine.instance.userId) continue
    //   if (!action.targetEntity || !hasComponent(action.targetEntity!, MountPointComponent)) continue
    //   const avatarEntity = world.getUserAvatarEntity(action.$from)

    //   const mountPoint = getComponent(action.targetEntity!, MountPointComponent)
    //   if (mountPoint.type === MountPoint.seat) {
    //     const avatar = getComponent(avatarEntity, AvatarComponent)
        

    //     if (hasComponent(avatarEntity, SittingComponent)) continue

    //     const transform = getComponent(action.targetEntity!, TransformComponent)
    //     const rigidBody = getComponent(avatarEntity, RigidBodyComponent)
    //     rigidBody.body.setTranslation(
    //       {
    //         x: transform.position.x,
    //         y: transform.position.y + avatar.avatarHalfHeight,
    //         z: transform.position.z
    //       },
    //       true
    //     )
    //     rigidBody.body.setLinvel({ x: 0, y: 0, z: 0 }, true)
    //     const sitting = addComponent(avatarEntity, SittingComponent, {
    //       mountPointEntity: action.targetEntity!,
    //       state: AvatarStates.SIT_ENTER
    //     })
    //     getComponent(avatarEntity, AvatarControllerComponent).movementEnabled = false

    //     const avatarAnimationComponent = getComponent(avatarEntity, AvatarAnimationComponent)

    //     changeState(avatarAnimationComponent.animationGraph, AvatarStates.SIT_IDLE)
    //     sitting.state = AvatarStates.SIT_IDLE
    //   }
      
    // }

    // for (const entity of sittingIdleQuery(world)) {
  
    //   const controller = getComponent(entity, AvatarControllerComponent)
    //   const avatarAnimationComponent = getComponent(entity, AvatarAnimationComponent)
    //   const avatarComponent = getComponent(entity, AvatarComponent)
    //   const sitting = getComponent(entity, SittingComponent)

      //changes
      for(const portalEntity of portalQuery(world)){
        console.log(world)
        console.log("portal entity :",portalEntity)
        const portal =  getComponent(portalEntity,PortalComponent)
        const sceneRootId= world.sceneJson.root
        if(world.sceneJson.entities[sceneRootId].name == "welcome_land"){
          if(portal.location == "castle"){
            console.log(portal)
            const castle_portal_scifi =  getComponent(portalEntity,RigidBodyComponent)
            castle_portal_scifi.body.setTranslation(new Vector3(2.5,9.5,11),true)
          }
        }else if(world.sceneJson.entities[sceneRootId].name == "castle"){
          if(portal.location == "scifi"){
            console.log(portal)
            const castle_portal_scifi =  getComponent(portalEntity,RigidBodyComponent)
            castle_portal_scifi.body.setTranslation(new Vector3(7.5,5,111.5),true)
          }
        }else if(world.sceneJson.entities[sceneRootId].name == "scifi"){
          if(portal.location == "western"){
            console.log(portal)
            const scifi_portal_western =  getComponent(portalEntity,RigidBodyComponent)
            scifi_portal_western.body.setTranslation(new Vector3(-40,1,-10),true)
          }
        }else if(world.sceneJson.entities[sceneRootId].name == "western"){
          if(portal.location == "welcome_land"){
            console.log(portal)
            const western_portal_castle =  getComponent(portalEntity,RigidBodyComponent)
            western_portal_castle.body.setTranslation(new Vector3(21.5,13.5,-14.3),true)
          }
      }
    // }

      // for(const modelEntity of modelQuery(world)){
      //   const model = getComponent(modelEntity,ModelComponent)
      //   console.log(model)
      //   if(model.scene.value?.name == "portal_model"){
      //     const modelBody = getComponent(modelEntity,TransformComponent)
      //     console.log(modelBody)
      //   }
      // }

      //end changes
    
      
      //const portal=addComponent(entity,PortalComponent,PortalComponentData,world)
      //console.log(portal.location)
      //portal.mesh?.position.clone().set(0,0,0)
      //setComponent(portalEntity,PortalComponent,portal,world)
      //addComponent(entity,PortalComponent,{},world)
      //console.log(portal)
    
      //const portal = getComponent(entity,PortalComponent)
      //console.log(portal)

    //   if (controller.localMovementDirection.lengthSq() > 0.1) {
    //     sitting.state = AvatarStates.SIT_LEAVE

    //     changeState(avatarAnimationComponent.animationGraph, AvatarStates.SIT_LEAVE)

    //     const avatarTransform = getComponent(entity, TransformComponent)
    //     const newPos = avatarTransform.position
    //       .clone()
    //       .add(new Vector3(0, 0, 1).applyQuaternion(avatarTransform.rotation))

    //     const interactionGroups = getInteractionGroups(CollisionGroups.Avatars, CollisionGroups.Ground)
    //     const raycastComponentData = {
    //       type: SceneQueryType.Closest,
    //       origin: newPos,
    //       direction: new Vector3(0, -1, 0),
    //       maxDistance: 2,
    //       groups: interactionGroups
    //     }
    //     const hits = Physics.castRay(Engine.instance.currentWorld.physicsWorld, raycastComponentData)

    //     if (hits.length > 0) {
    //       const raycastHit = hits[0] as RaycastHit
    //       if (raycastHit.normal.y > 0.9) {
    //         newPos.y -= raycastHit.distance
    //       }
    //     } else {
    //       newPos.copy(avatarTransform.position)
    //       newPos.y += avatarComponent.avatarHalfHeight
    //     }

    //     const rigidbody = getComponent(entity, RigidBodyComponent)
    //     rigidbody.body.setTranslation(newPos, true)

    //     changeState(avatarAnimationComponent.animationGraph, AvatarStates.LOCOMOTION)
    //     removeComponent(entity, SittingComponent)
    //     getComponent(Engine.instance.currentWorld.localClientEntity, AvatarControllerComponent).movementEnabled = true
    //   }
    }
  }

//   const cleanup = async () => {
//     world.scenePrefabRegistry.delete(ScenePrefabs.chair)
//     world.sceneComponentRegistry.delete(MountPointComponent.name)
//     world.sceneLoadingRegistry.delete(SCENE_COMPONENT_MOUNT_POINT)
//     removeActionQueue(mountPointActionQueue)
//     removeQuery(world, mountPointQuery)
//     removeQuery(world, sittingIdleQuery)
//     //changes
//     removeQuery(world,portalQuery)
//     // removeQuery(world,modelQuery)
//     //end changes
//   }

  return {
     execute
    // , cleanup 
}
}
