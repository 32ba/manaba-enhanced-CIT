"use strict"

import { getStorage, setStorage } from "./network/storage"

chrome.runtime.onInstalled.addListener((details) => {
  if (["install", "update"].includes(details.reason)) {
    const query = new URLSearchParams({
      event: details.reason,
    })

    chrome.tabs.create({
      url: `${chrome.runtime.getURL("options.html")}?${query.toString()}`,
    })
  }

  getStorage({
    kind: "sync",
    keys: null,
    callback: (storage) => {
      setStorage({
        kind: "sync",
        items: {
          "features-assignments-coloring":
            storage["features-assignments-coloring"] ?? true,
          featuresAssignmentsColoring:
            storage["features-assignments-coloring"] ?? true,
          "features-deadline-highlighting":
            storage["features-deadline-highlighting"] ?? true,
          featuresDeadlineHighlighting:
            storage["features-deadline-highlighting"] ?? true,
          "features-autosave-reports":
            storage["features-autosave-reports"] ?? true,
          featuresAutoSaveReports: storage["features-autosave-reports"] ?? true,
          "features-remove-confirmation":
            storage["features-remove-confirmation"] ?? true,
          featuresRemoveConfirmation:
            storage["features-remove-confirmation"] ?? true,
          featuresDragAndDrop: storage.featuresDragAndDrop ?? true,
        },
      })
    },
  })

  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "openOptionsPage") {
      chrome.runtime.openOptionsPage()
    }
  })
})
